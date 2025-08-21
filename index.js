#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const projectName = args[0] || 'mon-projet';

const projectPath = path.join(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
  console.error(`Erreur: Le dossier '${projectName}' existe déjà.`);
  process.exit(1);
}

// Création de la structure de dossiers
fs.mkdirSync(projectPath);
fs.mkdirSync(path.join(projectPath, 'src'));
fs.mkdirSync(path.join(projectPath, 'src/assets'));


// Contenu des fichiers
const htmlContent = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${projectName}</title>
    <link rel="stylesheet" href="src/style.css">
    <script src="src/index.js" defer></script>
</head>
<body>
    <h1>Bienvenue sur mon projet ${projectName}</h1>
</body>
</html>`;

const cssContent = `/* Styles de base */
:root{
    /* Colors*/
    --primary-color:black;
    --secondary-color:white;
    /* Utils */
    --std-border: 1px solid black;
    --std-shadow: 0 2px 3px grey;
}
body,html { 
    padding:0; 
    margin:0; 
}`;

const jsContent = `// Fichier principal
console.log("Le projet '${projectName}' est prêt !");
// raccourcis pour document.querySelector
const $ = (selector) => document.querySelector(selector);

`;

// Écriture des fichiers
fs.writeFileSync(path.join(projectPath, 'index.html'), htmlContent);
fs.writeFileSync(path.join(projectPath, 'src', 'style.css'), cssContent);
fs.writeFileSync(path.join(projectPath, 'src', 'index.js'), jsContent);

console.log(`Le projet '${projectName}' a été créé avec succès !`);