const path = require('path');
const appDirName = path.resolve(__dirname+'/..');

const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	js : {
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
				appDirName+"/src/js/entry.js",
			],
		},
		output : {
			path : appDirName +'/addon',
			filename : '[name].js',
		},
		resolve : {
			extensions : ['.js', '.jsx',],
		},
		optimization : {
			minimizer: [new TerserPlugin({
				extractComments: false,
			})],
			minimize : false,
		},
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
		name : 'Measure Converter',
		iconFormats : [32, 48, 64, 96, 128, 512],
		themeColor : '#EEE',
	},
	css : {
		inputFolder : appDirName+'/src/less',
		inputFilename : 'index.less',
		outputFolder : appDirName+'/addon',
		outputFilename : 'style.css',
	},
	zipSource : {
		directories : [
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