const tasks = require('./tasks.js');
const config = require('./config.js');

exports.css = function (args) {
	tasks.cssSite();
}

exports.js = function (args) {
	tasks.jsSite();
}

exports.test = function(args) {
	tasks.test();
}

exports.dev = function(args) {
	tasks.jsSite().then(tasks.cssSite);
}

exports.build = function(args) {
	tasks.jsSite()
		.then(tasks.cssSite)
		.then(tasks.jsAddon)
		.then(tasks.cssAddon)
		.then(tasks.manifestAddon)
		.then(tasks.manifestSite)
		.then(tasks.htmlAddon)
		.then(tasks.htmlSite)
		.then(tasks.images);
}

exports.start = function(args) {
	tasks.serve();
}

exports.publish = function(args) {
	const zip = require('./zip.js');
	tasks.jsAddon()
		.then(tasks.cssAddon)
		.then(tasks.manifestAddon)
		.then(tasks.htmlAddon)
		.then(tasks.images)
		.then(tasks.zip);
}

exports.watch = function(args) {
	const watch = require('node-watch');
	console.log('Watching src');
	watch('./src/js', { 
		recursive: true,
	}, function(evt, name) {
		console.log('%s changed.', name);
		tasks.jsSite().then(tasks.jsAddon).then(function() {
			console.log(chalk.green('JS successfully compiled'));
		}).catch(function(error) {
			console.log(chalk.red(error));
		});
	});
	watch('./src/less', { 
		recursive: true,
	}, function(evt, name) {
		console.log('%s changed.', name);
		tasks.cssSite().then(tasks.cssAddon).then(function() {
			console.log(chalk.green('CSS successfully compiled'));
		}).catch(function(error) {
			console.log(chalk.red(error));
		});
	});
}

exports.images = function(args) {
	tasks.images();
}

exports.manifestAddon = function(args) {
	tasks.manifestAddon();
}

exports.manifestSite = function(args) {
	tasks.manifestSite();
}

exports.htmlAddon = function(args) {
	tasks.htmlAddon();
}

exports.htmlSite = function(args) {
	tasks.htmlSite();
}
