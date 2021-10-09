const compiler = require('./compiler');
const chalk = require('chalk');

exports.css = function () {
	return compiler.cssAddon().then(function(result) {
		console.log(chalk.green('CSS successfully compiled'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.js = function () {
	return compiler.jsAddon().then(function(result) {
		console.log(chalk.green('JS successfully compiled'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.serve = function () {
	return compiler.serve().then(function(port) {
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
	return compiler.images().then(function(result) {
		console.log(chalk.green('Images have been generated'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.manifest = function() {
	return compiler.manifestAddon().then(function(result) {
		console.log(chalk.green(result));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.html = function() {
	return compiler.htmlAddon().then(function(result) {
		console.log(chalk.green(result));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}
