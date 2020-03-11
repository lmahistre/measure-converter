const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('./components/main.jsx');

window.onload = function() {
	ReactDOM.render(
		React.createElement(Main),
		document.getElementById('application-root')
	);
}
