const React = require('react');

const ConverterLength = require('./converter-length');
const ConverterWeight = require('./converter-weight');

const converters = {
	length : ConverterLength,
	weight : ConverterWeight,
}

class Vue extends React.Component {

	constructor() {
		super();
		this.state = {
			converter : 'length',
		}
	}

	handleChangeConverter(event) {
		this.setState({
			converter : event.target.value,
		});
	}

	render () {
		const props = this.props;
		return (
			<div>
				<table>
					<tbody>
						<tr>
							<td colSpan={2}>
								<select onChange={this.handleChangeConverter.bind(this)} value={this.state.converter}>
									<option value="length">Lengths (cm / in)</option>
									<option value="weight">Weights (kg / lb)</option>
								</select>
							</td>
						</tr>
						{React.createElement(converters[this.state.converter])}
					</tbody>
				</table>
				{props.showNewWindow ?
					<div className="actions">
						<a href="#"
							className="action"
							title={"New window"}
							onClick={props.openNewWindow}
						>
							<img src="img/new_window.png" alt="New window" />
						</a>
						<div className="clearfix" />
					</div>
				: null }
			</div>
		);
	}
}

module.exports = Vue;
