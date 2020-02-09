const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('./components/main.jsx');

window.onload = function() {
	document.title = 'Measure Converter';
	const props = {};

	ReactDOM.render(
		React.createElement(Main, props),
		document.getElementById('application-root')
	);
}
