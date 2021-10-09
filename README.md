# Measure Converter

## Usage

This addon instantly converts measurements from and to different units:
* Length: centimeters and inches
* Weight: kilograms and pounds
* Temperature: Celsius and Farenheit

It is possible to display the converter in a separate window to avoid losing converted data.

## Build and development

### Requirements

* NodeJS version 10 or higher
* NPM vresion 7 or higher

### Structure of the project

Source files for Javascript and CSS are in the folder `src`. Folder `server` contains all the scripts neccesary to build the web page and the Firefox addon.

The Javascript of the addon is built using [Webpack](https://webpack.js.org) and [React](https://reactjs.org).

CSS is built using [LESS](https://lesscss.org).

During build process, an `addon` folder is created containing all generated files. The content of this folder is used to create the addon. It contains:
* folder `img` containing all the logos and images
* `app.js`: the Javascript bundle generated with Webpack. The entry point used by Webpack is `src/js/entry.js`
* `index.html`: this file is also generated
* `manifest.json`: manifest used by Firefox to run the addon
* `style.css` style made from LESS files

### Development

First, install dependencies:

`npm install`

To compile Javascript bundle:

`npm run js`

To compile CSS for both the addon and the web page:

`npm run css`

To launch unit tests:

`npm test`

To build Javascript and CSS files for production, then launch unit tests:

`npm run build`

To run a web server and use the application as a web page:

`npm run start`

### Publishing

First, install dependencies:

`npm install`

Before developing or publishing, it is possible to remove the entire `addon` folder, this folder and its content is going to be re-generated. If the files it contains are not removed they will be overwritten.

To build the application and create Zip files containing the addon code and source code, run:

`npm run publish`

This action generates all the files in the `addon` folder (`app.js`, `style.css`, `index.html`, `manifest.json` and images), then creates two zip files:
* `main.zip`: the zip file containing the code of the Firefox addon. It is only made with the content of the folder `addon`. This file is uploaded on Mozilla website to create the .xpi file.
* `source.zip`: the zip file containing the source code. It contains all the content of the development repository. This file is uploaded on Mozilla website to provide the source code.

The package for the addon is made from folder `addon`, which contains static files, manifest and html.

## Languages

Documentation is also available in French [here](README.fr.md).
