const React = require('react');

class ConverterLength extends React.Component {
	render() {
		return (
			<React.Fragment>
				<tr>
					<td className="label" title={"Centimeters"}>
						<label className="short">{"cm"}</label>
						<label className="long">{"Centimeter"}</label>
					</td>
					<td className="input">
						<div className="input-container">
							<input
								id="centimeter"
								placeholder={"Decimal"}
								className="large"
								onChange={props.handleChange}
								value={props.centimeter}
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
								id="inch"
								placeholder={"Inches"}
								className="large"
								onChange={props.handleChange}
								value={props.inch}
							/>
						</div>
					</td>
				</tr>
			</React.Fragment>
		);
	}
}

module.exports = ConverterLength;
