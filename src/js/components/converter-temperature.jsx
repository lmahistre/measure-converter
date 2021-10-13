const React = require('react');

const compute = require('../services/compute.js');

module.exports = class ConverterTemperature extends React.Component {
	handleChange (event) {
		const origin = event.target.attributes.name.value;
		const inputValue = event.target.value;
		this.setState(compute.temperature(inputValue, origin));
	}

	constructor (props) {
		super();
		this.mainFieldRef = React.createRef();
		this.state = {};
	}

	componentDidMount () {
		this.mainFieldRef.current.focus();
	}

	render() {
		return (
			<React.Fragment>
				<tr>
					<td className="label" title={"Celsius"}>
						<label className="short">{"°C"}</label>
						<label className="long">{"Celsius"}</label>
					</td>
					<td className="input">
						<div className="input-container">
							<input
								name="celsius"
								placeholder={"Celsius"}
								className="large"
								onChange={this.handleChange.bind(this)}
								value={this.state.celsius}
								ref={this.mainFieldRef}
							/>
						</div>
					</td>
				</tr>
				<tr>
					<td className="label" title={"Fahrenheit"}>
						<label className="short">{"°F"}</label>
						<label className="long">{"Fahrenheit"}</label>
					</td>
					<td className="input">
						<div className="input-container">
							<input
								name="fahrenheit"
								placeholder={"Fahrenheit"}
								className="large"
								onChange={this.handleChange.bind(this)}
								value={this.state.fahrenheit}
							/>
						</div>
					</td>
				</tr>
			</React.Fragment>
		);
	}
}
