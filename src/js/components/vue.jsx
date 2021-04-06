const React = require('react');

const ConverterLength = require('./converter-length');
const ConverterTemperature = require('./converter-temperature');
const ConverterWeight = require('./converter-weight');

const lsKey = 'mc_lastUsedConverter';

const converters = {
	length : ConverterLength,
	weight : ConverterWeight,
	temperature : ConverterTemperature,
}

module.exports = function Vue({
	openNewWindow,
	showNewWindow,
}) {
	const defaultConverter = localStorage[lsKey] && converters[localStorage[lsKey]] ? localStorage[lsKey] : 'length';

	const [converter, setConverter] = React.useState(defaultConverter);

	const handleChangeConverter = function(event) {
		localStorage[lsKey] = event.target.value;
		setConverter(event.target.value);
	}

	return (
		<div>
			<table>
				<tbody>
					<tr>
						<td colSpan={2}>
							<select onChange={handleChangeConverter} value={converter}>
								<option value="length">Lengths (cm / in)</option>
								<option value="weight">Weights (kg / lb)</option>
								<option value="temperature">Temperatures (°C / °F)</option>
							</select>
						</td>
					</tr>
					{converters[converter] && React.createElement(converters[converter])}
				</tbody>
			</table>
			{showNewWindow ?
				<div className="actions">
					<a href="#"
						className="action"
						title={"New window"}
						onClick={openNewWindow}
					>
						<img src="img/new_window.png" alt="New window" />
					</a>
					<div className="clearfix" />
				</div>
			: null }
		</div>
	);
}
