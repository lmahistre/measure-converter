const path = require('path');
const appDirName = path.resolve(__dirname+'/..');

module.exports = {
	jsSite : {
		mode: 'production',
		module: {
			rules: [
				{
					test: /\.jsx$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
					},
				},
			],
		},
		entry : {
			app :[
				appDirName+"/src/js/entry-site.js",
			],
		},
		output : {
			path : appDirName +'/public',
			filename : '[name].js',
		},
		optimization : {
			minimize : false,
		},
		node : false,
	},
	jsAddon : {
		mode: 'production',
		module: {
			rules: [
				{
					test: /\.jsx$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
					},
				},
			],
		},
		entry : {
			app :[
				appDirName+"/src/js/entry-addon.js",
			],
		},
		output : {
			path : appDirName +'/addon',
			filename : '[name].js',
		},
		// optimization : {
		// 	minimize : false,
		// },
		node : false,
	},
	test : {
		spec_dir: 'src/tests',
		spec_files: [
			'tools.spec.js',
			'validate.spec.js',
			'converter.spec.js',
			'compute.spec.js',
		],
		helpers: [],
	},
	app : {
		port : 3016,
	},
	cssSite : {
		inputFolder : appDirName+'/src/less',
		inputFilename : 'index.less',
		outputFolder : appDirName+'/public',
		outputFilename : 'style.css',
	},
	cssAddon : {
		inputFolder : appDirName+'/src/less',
		inputFilename : 'index.less',
		outputFolder : appDirName+'/addon',
		outputFilename : 'style.css',
	},
	zipSource : {
		directories : [
			'public',
			'addon',
			'server',
			'src',
		],
		files : [
			'.gitignore',
			'.travis.yml',
			'build.js',
			'CHANGELOG.md',
			'package.json',
			'package-lock.json',
			'README.fr.md',
			'README.md',
		],
	},
};