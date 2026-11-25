import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter><App /></BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

const query = new URLSearchParams(window.location.search);
const path = window.location.pathname.replace(/\/$/, '') || '/';
const customizedPage = (path === '/offers' && query.has('categorie')) || (path === '/contact' && query.has('motif'));
if (container.dataset.prerendered === path && !customizedPage) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
