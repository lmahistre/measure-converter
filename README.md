# Measure Converter

## Usage

This addon instantly converts measurements from and to different units:
* Length: centimeters and inches
* Weight: kilograms and pounds
* Temperature: Celsius and Farenheit

It is possible to display the converter in a separate window to avoid losing converted data.

The addon is not published yet.

## Build and development

The Javascript of the addon is built using [Webpack](https://webpack.js.org) and [React](https://reactjs.org).

Source files for Javascript and CSS are in the folder `src`. 
Files generated by build are in the two folders:
* `addon` contains the files for the Firefox addon
* `public` contains the files to use the app as a web page
There are 2 generated files: `app.js` and `style.css`. Other files are static.

First, install dependencies:

`npm install`

To compile Javascript and CSS files for the web page:

`npm run dev`

To launch unit tests:

`npm test`

To build Javascript and CSS files for production (addon and site), then launch unit tests:

`npm run build`

To create Zip files containing the addon code and source code:

`npm run publish`

The package for the addon is made from folder `addon`, which contains static files, manifest and html.

## Languages

Documentation is also available in French [here](README.fr.md).
