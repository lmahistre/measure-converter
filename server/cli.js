const tasks = require('./tasks.js');
const config = require('./config.js');

exports.css = function (args) {
	tasks.css();
}

exports.js = function (args) {
	tasks.js();
}

exports.test = function(args) {
	tasks.test();
}

exports.build = function(args) {
	tasks.js()
		.then(tasks.css)
		.then(tasks.manifest)
		.then(tasks.html)
		.then(tasks.images);
}

exports.start = function(args) {
	tasks.serve();
}

exports.publish = function(args) {
	const zip = require('./zip.js');
	tasks.js()
		.then(tasks.css)
		.then(tasks.manifest)
		.then(tasks.html)
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
		tasks.js().then(function() {
			console.log(chalk.green('JS successfully compiled'));
		}).catch(function(error) {
			console.log(chalk.red(error));
		});
	});
	watch('./src/less', { 
		recursive: true,
	}, function(evt, name) {
		console.log('%s changed.', name);
		tasks.css().then(function() {
			console.log(chalk.green('CSS successfully compiled'));
		}).catch(function(error) {
			console.log(chalk.red(error));
		});
	});
}

exports.images = function(args) {
	tasks.images();
}

exports.manifest = function(args) {
	tasks.manifest();
}

exports.html = function(args) {
	tasks.html();
}
