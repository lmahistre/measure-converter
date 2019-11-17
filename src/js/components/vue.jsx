const React = require('react');

class Vue extends React.Component {

	constructor (props) {
		super();
		this.mainFieldRef = React.createRef();
	}

	componentDidMount () {
		this.mainFieldRef.current.focus();
	}

	render () {
		const props = this.props;
		return (
			<div>
				<table>
					<tbody>
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
					</tbody>
				</table>
				{ props.showNewWindow ?
					<div className="actions">
						<a href="#"
							id="link_new_window"
							className="action"
							title={"New window"}
							onClick={props.openNewWindow}
						>
							<img src="img/new_window.png" alt="New window" />
						</a>
						<div className="clearfix"></div>
					</div>
				: null }
			</div>
		);
	}
}

module.exports = Vue;
