const React = require('react');

const compute = require('../services/compute.js');

class ConverterLength extends React.Component {
	handleChange (event) {
		const origin = event.target.attributes.name.value;
		const inputValue = event.target.value;
		this.setState(compute.length(inputValue, origin));
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
					<td className="label" title={"Centimeters"}>
						<label className="short">{"cm"}</label>
						<label className="long">{"Centimeters"}</label>
					</td>
					<td className="input">
						<div className="input-container">
							<input
								name="centimeter"
								placeholder={"Decimal"}
								className="large"
								onChange={this.handleChange.bind(this)}
								value={this.state.centimeter}
								ref={this.mainFieldRef}
							/>
						</div>
					</td>
				</tr>
				<tr>
					<td className="label" title={"Inches"}>
						<label className="short">{"in"}</label>
						<label className="long">{"Inches"}</label>
					</td>
					<td className="input">
						<div className="input-container">
							<input
								name="inch"
								placeholder={"Inches"}
								className="large"
								onChange={this.handleChange.bind(this)}
								value={this.state.inch}
							/>
						</div>
					</td>
				</tr>
			</React.Fragment>
		);
	}
}

module.exports = ConverterLength;
