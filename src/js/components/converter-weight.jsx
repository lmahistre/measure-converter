const React = require('react');

const compute = require('../services/compute.js');

class ConverterWeight extends React.Component {
	handleChange (event) {
		const origin = event.target.attributes.name.value;
		const inputValue = event.target.value;
		this.setState(compute.weight(inputValue, origin));
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
					<td className="label" title={"Kilograms"}>
						<label className="short">{"kg"}</label>
						<label className="long">{"Kilograms"}</label>
					</td>
					<td className="input">
						<div className="input-container">
							<input
								name="kilogram"
								placeholder={"Kilograms"}
								className="large"
								onChange={this.handleChange.bind(this)}
								value={this.state.kilogram}
								ref={this.mainFieldRef}
							/>
						</div>
					</td>
				</tr>
				<tr>
					<td className="label" title={"Pounds"}>
						<label className="short">{"lb"}</label>
						<label className="long">{"Pounds"}</label>
					</td>
					<td className="input">
						<div className="input-container">
							<input
								name="pound"
								placeholder={"Pounds"}
								className="large"
								onChange={this.handleChange.bind(this)}
								value={this.state.pound}
							/>
						</div>
					</td>
				</tr>
			</React.Fragment>
		);
	}
}

module.exports = ConverterWeight;
