const React = require('react');

const Vue = require('./vue.jsx');

module.exports = function Main() {
	const showNewWindow = !location.href.includes('#') && 'undefined' !== typeof browser;

	const openNewWindow = function(event) {
		try {
			const creating = browser.windows.create({
				height : 260,
				width : 400,
				url : 'index.html#',
				type : 'popup',
			});
		}
		catch (error) {
			alert(error.message);
		}
	}

	return <Vue
		openNewWindow={openNewWindow}
		showNewWindow={showNewWindow}
	/>;
};
