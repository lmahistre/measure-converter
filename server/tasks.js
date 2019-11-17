const compiler = require('./compiler');
const chalk = require('chalk');

exports.cssSite = function () {
	return compiler.cssSite().then(function(result) {
		console.log(chalk.green('CSS successfully compiled'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.cssAddon = function () {
	return compiler.cssAddon().then(function(result) {
		console.log(chalk.green('CSS successfully compiled'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.jsSite = function () {
	return compiler.jsSite().then(function(result) {
		console.log(chalk.green('JS successfully compiled'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.jsAddon = function () {
	return compiler.jsAddon().then(function(result) {
		console.log(chalk.green('JS successfully compiled'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.start = function () {
	return compiler.start().then(function(port) {
		console.log(chalk.green('Server is listening on port '+port));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.test = function () {
	return compiler.test().then(function(result) {
		console.log(chalk.green(result));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.zip = function() {
	const zip = require('./zip.js');
	return zip.addon().then(function(result) {
		console.log(chalk.green(result));
		return zip.source();
	}).then(function(result) {
		console.log(chalk.green(result));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.images = function() {
	const fs = require('fs');
	const sharp = require('sharp');

	return new Promise(function(resolve, reject) {
		if (!fs.existsSync('./public/img')) {
			fs.mkdirSync('./public/img');
		}
		if (!fs.existsSync('./addon/img')) {
			fs.mkdirSync('./addon/img');
		}

		fs.copyFileSync('./src/img/logo-512.png', './addon/img/logo-512.png');
		fs.copyFileSync('./src/img/logo-512.png', './public/img/logo-512.png');
		fs.copyFileSync('./src/img/new_window.png', './addon/img/new_window.png');
		fs.copyFileSync('./src/img/new_window.png', './public/img/new_window.png');

		const formats = [32, 48, 64, 96, 128];

		Promise.all(formats.map(function(format) {
			return sharp('./src/img/logo-512.png')
			.resize(format)
			.toFile('./addon/img/logo-'+format+'.png')
			.catch(function(error) {
				reject(error);
			});
		})).then(function() {
			for (let i=0; i<formats.length; i++) {
				fs.copyFileSync('./addon/img/logo-'+formats[i]+'.png', './public/img/logo-'+formats[i]+'.png');
			}

			console.log(chalk.green('Images have been generated'));
			resolve();
		});
	});
}
