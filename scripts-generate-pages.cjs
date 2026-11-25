const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

process.env.NODE_ENV = 'production';
require('react-scripts/config/env');

const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { HelmetProvider } = require('react-helmet-async');

const sourceDirectory = path.resolve('src') + path.sep;
for (const extension of ['.ts', '.tsx']) {
  require.extensions[extension] = (module, filename) => {
    if (!filename.startsWith(sourceDirectory)) throw new Error('Unexpected TypeScript module: ' + filename);
    const source = fs.readFileSync(filename, 'utf8');
    const { outputText } = ts.transpileModule(source, {
      fileName: filename,
      compilerOptions: { target: ts.ScriptTarget.ES2019, module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
    });
    module._compile(outputText, filename);
  };
}
require.extensions['.css'] = () => {};

const App = require('./src/App.tsx').default;
const { canonicalUrl, notFoundPath } = require('./src/metadata.ts');
const pages = require('./src/seo.json');
const redirects = require('./src/redirects.json');
const shell = fs.readFileSync('build/index.html', 'utf8');
const escape = value => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

function writePage(route, html) {
  const folder = path.join('build', route.slice(1));
  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, 'index.html'), html);
}

function renderPage(route) {
  const context = {};
  const markup = renderToString(React.createElement(HelmetProvider, { context },
    React.createElement(StaticRouter, { location: route }, React.createElement(App))));
  const { helmet } = context;
  if (!markup.includes('<h1') || (route !== notFoundPath && !helmet.link.toString().includes(canonicalUrl(route)))) {
    throw new Error('Missing page content or canonical for ' + route);
  }
  const head = [helmet.title, helmet.meta, helmet.link, helmet.script].map(tags => tags.toString()).join('');
  const html = shell.replace(/<title>.*?<\/title>/, () => head)
    .replace(/<noscript>.*?<\/noscript>/, '')
    .replace(/<div id=["']?root["']?>\s*<\/div>/, () => '<div id="root" data-prerendered="' + escape(route) + '">' + markup + '</div>');
  if (!html.includes('data-prerendered=')) throw new Error('Missing React root in build/index.html');
  return html;
}

for (const route of Object.keys(pages)) {
  writePage(route, renderPage(route));
}

for (const [route, target] of Object.entries(redirects)) {
  writePage(route, '<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Le Studio Gris</title>' +
    '<link rel="canonical" href="' + escape(canonicalUrl(target.split('#')[0])) + '"><meta http-equiv="refresh" content="0;url=' + escape(target) +
    '"></head><body><a href="' + escape(target) + '">Accéder à la page du Studio Gris</a></body></html>');
}

fs.writeFileSync('build/_redirects', Object.entries(redirects).map(([route, target]) => route + ' ' + target + ' 301').join('\n') + '\n/* /404.html 404\n');
fs.writeFileSync('build/404.html', renderPage(notFoundPath));
fs.writeFileSync('build/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  Object.keys(pages).map(route => '  <url><loc>' + escape(canonicalUrl(route)) + '</loc></url>').join('\n') + '\n</urlset>\n');
