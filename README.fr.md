# Measure Converter

## Utilisation

Cette extension convertit instantanément des mesures :
* Longueurs : en centimètres et en pouces
* Poids : kilogrammes et livres
* Températures : degrés Celsius et Farenheit

Il est possible d'ouvrir le convertisseur dans une fenêtre séparée pour éviter de perdre les données entrées.

## Développement

Le Javascript est réalisée avec [React](https://reactjs.org) et est dans un bundle créé grâce à [Webpack](https://webpack.js.org). Le CSS est généré grâce à la librairie [LESS](https://lesscss.org)

Installer d'abord les dépendances:

`npm install`

Les fichiers source Javascript et LESS sont dans le dossier `src`. Les fichiers sont générés dans le dossier `addon` qui contient les fichiers destinés à l'extension Firefox.

Pour compiler les fichiers Javascript et CSS :

`npm run dev`

Pour lancer les tests unitaires :

`npm test`

Pour construire les fichiers Javascript et CSS et lancer les tests unitaires :

`npm run build`

Pour créer les archives qui contiennent le code de l'addon et le code source :

`npm run publish`

Le package pour l'addon est fait à partir du dosser `addon`, il contient les fichiers statiques, le manifest et l'HTML.

## Langues

La documentation en anglais est [ici](README.md).
