const React = require('react');

const compute = require('../services/compute.js');

const Vue = require('./vue.jsx');

class Main extends React.Component {

	constructor (props) {
		super();
		if (props.centimeter) {
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


	handleChange (event) {
		const origin = event.target.attributes.id.value;
		const inputValue = event.target.value;
		this.setState(compute(inputValue, origin));
	}


	openNewWindow (event) {
		try {
			const creating = browser.windows.create({
				height : 260,
				width : 340,
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
			handleChange={this.handleChange.bind(this)}
			centimeter={this.state.centimeter}
			inch={this.state.inch}
			openNewWindow={this.openNewWindow.bind(this)}
			showNewWindow={this.showNewWindow}
		/>;
	}
}

module.exports = Main;
