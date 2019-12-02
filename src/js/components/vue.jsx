const React = require('react');

const ConverterLength = require('./converter-length');

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
							<td colSpan={2}>
								<select onChange={}>
									<option value="length">Lengths</option>
								</select>
							</td>
						</tr>
						<ConverterLength />
					</tbody>
				</table>
				{props.showNewWindow ?
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
