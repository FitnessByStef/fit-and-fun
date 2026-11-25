# Le Studio Gris

Site React du Studio Gris à Thèze.

## Développement

```sh
npm ci
npm start
```

Ouvrir http://localhost:3000. La page événement est à `/evjf-girls-night` et le parcours de devis à `/contact?motif=evjf#message`.

```sh
npm test -- --watchAll=false --passWithNoTests
npx tsc --noEmit
npm run lint
npm run build
```

Le build prérend le contenu React de chaque route publique dans `build/`, avec ses métadonnées, les redirections historiques et le sitemap. Les catégories du catalogue ont chacune une URL indexable. L’hébergement existant utilise GitHub Pages.

## Contact et devis

Pour activer l’envoi sur le site, renseigner les trois variables publiques de `.env.example` dans `.env.local`. Sur GitHub Actions, créer les variables de dépôt du même nom puis relancer le déploiement. Les formulaires de contact et de devis partagent le service EmailJS.

Dans le modèle EmailJS, définir **lebatimentgris@gmail.com** comme destinataire fixe, `{{email}}` comme Reply-To, `{{subject}}` comme sujet et utiliser `{{name}}` et `{{message}}` dans le corps. Configurer la liste des origines autorisées, dont `https://www.studiogris.fr`. Vérifier la réception d’un message de chaque formulaire avant la mise en ligne et compléter les informations de confidentialité selon la configuration effective du service.

Sans configuration, le parcours de devis prépare un brouillon dans la messagerie de la personne. L’envoi reste à effectuer dans cette messagerie.

Les coordonnées et liens sont dans `src/studio-config.json`, les disciplines et créneaux dans `src/studio.ts` et les métadonnées par page dans `src/seo.json`.

## Mise en ligne et indexation

Après le déploiement, vérifier que le domaine public renvoie les pages et `/sitemap.xml` en HTTP 200, puis soumettre le sitemap dans Google Search Console. Utiliser l’inspection d’URL pour contrôler l’accueil, le planning, les tarifs et la page EVJF. Pour le référencement local, vérifier que la fiche Google Business Profile reprend la même adresse, le même téléphone et le domaine public.
