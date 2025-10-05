# BigMenu

Ce dépôt regroupe :
- Le bot Telegram (`index.js`)
- La WebApp (`/webapp`)

## Déploiement sur Render

1. Crée un nouveau projet **Web Service** sur [Render.com](https://render.com).
2. Connecte ton dépôt GitHub contenant ces fichiers.
3. Dans les paramètres du service :
   - Commande de démarrage : `node index.js`
   - Root Directory : `/`
4. Déploie !

La WebApp sera servie depuis `/webapp` (ou la racine selon ton `index.js`).
