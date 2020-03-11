const React = require('react');

const Vue = require('./vue.jsx');

class Main extends React.Component {

	constructor (props) {
		super();
		if (props && props.centimeter) {
			this.state = compute(props.centimeter, 'centimeter');
		}
		else {
			this.state = {
				centimeter : null,
				inch : null,
			}
		}
		this.showNewWindow = location.href.indexOf('#') === -1 && 'undefined' !== typeof browser;
	}

	openNewWindow (event) {
		try {
			const creating = browser.windows.create({
				height : 260,
				width : 400,
				url : 'index.html#'+this.state.centimeter,
				type : 'popup',
			});
		}
		catch (error) {
			alert(error.message);
		}
	}

	render () {
		return <Vue
			openNewWindow={this.openNewWindow.bind(this)}
			showNewWindow={this.showNewWindow}
		/>;
	}
}

module.exports = Main;
