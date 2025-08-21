# Créateur de projet Web Vanilla

**`vanillaweb`** est un outil en ligne de commande (CLI) qui vous permet de démarrer rapidement de nouveaux projets web en HTML, CSS et JavaScript, sans configuration ni dépendances inutiles.

## ✨ Fonctionnalités

* **Légèreté :** Crée une structure de base simple et efficace, prête à l'emploi.
* **Rapidité :** Gagnez du temps en automatisant la création des dossiers et des fichiers.
* **Portabilité :** Fonctionne partout où Node.js et npm sont installés.
* **Ajout :** Utilisation du ```$``` a la place de ```document.querySelector() ```: 
  
```bash
let body = document.querySelector('body');
```
devient:
```bash
let body = $('body');
```

## 🚀 Démarrage rapide

### Prérequis

Assurez-vous d'avoir [Node.js](https://nodejs.org/) et npm (ou npx) installés sur votre machine.

### Utilisation

Pour générer un nouveau projet, ouvrez votre terminal, naviguez vers le dossier parent de votre futur projet, et exécutez la commande `npx` suivante :

```bash
npx vanillaweb mon-nouveau-projet
```
mon-nouveau-projet sera le nom de votre nouveau dossier de projet.

## 📁 Structure du projet généré
La commande crée un dossier nommé mon-nouveau-projet avec la structure de base suivante :

mon-nouveau-projet/

├── src/<br>
│   └── style.css<br>
│   └── index.js<br>
│   └── assets/<br>
└── index.html<br>
>
Chaque fichier contient un code de base pour vous permettre de démarrer immédiatement.

## 🤝 Contribuer
Les contributions sont les bienvenues ! Si vous avez des idées d'améliorations, si vous trouvez un bug ou si vous souhaitez ajouter de nouvelles fonctionnalités, n'hésitez pas à :

Ouvrir une Issue pour signaler un problème ou proposer une idée.

Créer une Pull Request avec vos modifications.

## 📄 Licence
Ce projet est sous la Licence ISC.

La licence ISC est une licence de logiciel libre permissive. Elle vous autorise à utiliser, modifier et distribuer ce logiciel librement, y compris dans des projets commerciaux.

Les seules conditions sont que la notice de copyright et la permission de la licence soient incluses dans toutes les copies du logiciel.

Pour plus de détails, consultez le fichier LICENSE.


## 📧 Contact
Développé par  @axel183.