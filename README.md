# MagicMirror² Module: MMM-AtbSanntid
This is an unofficial module for the MagicMirror project showing departure times from the public transport service in Trøndelag, Norway - [AtB](https://www.atb.no/)

## How to install

Remote into your Magic Mirror box using a terminal software and go to the modules folder:

    cd ~/MagicMirror/modules

Clone the repository:

	git clone https://github.com/Springvar/MMM-AtbSanntid.git

Add the module to the modules array in the config/config.js file by adding the following section. You can change this configuration later when you see this works:

	{
		module: 'MMM-AtbSanntid',
		position: 'top_right'
	},

Find your location using the configuration form at <a href="http://st.atb.no/New/minskjerm/FullScreenTransitConfig.aspx">this atb.no page</a>.

## Configuration options

<table style="width:100%">
	<tr>
		<th>Option</th>
		<th>Comment</th>
		<th>Default</th>
	</tr>
	<tr>
		<td>stops</td>
		<td>List of stops to list departures from.</td>
		<td>[{id: 16010011, name: "Nidarosdomen", lines: ''}]</td>
	</tr>
	<tr>
		<td>updateInterval</td>
		<td>How often to get new data. Defaults to 1 minute.</td>
		<td>60000</td>
	</tr>
	<tr>
		<td>initialLoadDelay</td>
		<td>Defaults to 1 sec.</td>
		<td>1000</td>
	</tr>
	<tr>
		<td>rows</td>
		<td>Number of departures to show.</td>
		<td>10</td>
	</tr>
	<tr>
		<td>lang</td>
		<td>Language of output returned from atb. Supported (no | en)</td>
		<td>no</td>
	</tr>
	<tr>
		<td>tableClass</td>
		<td>The css class setting to be used for the table element</td>
		<td></td>
	</tr>
	<tr>
		<td>headerClass</td>
		<td>The css class setting to be used for the table header element</td>
		<td>small align-left</td>
	</tr>
	<tr>
		<td>bodyClass</td>
		<td>The css class setting to be used for the table body element</td>
		<td>small light align-left</td>
	</tr>
	<tr>
		<td>cellPadding</td>
		<td>Style setting for cell padding</td>
		<td>0px 7px</td>
	</tr>
	<tr>
		<td>showIcon</td>
		<td>Show a little bus icon next to the bus line</td>
		<td>true</td>
	</tr>
	<tr>
		<td>topPercentileClass</td>
		<td>The css class setting to be used for table rows above the topPercentileCutoff</td>
		<td>bright</td>
	</tr>
	<tr>
		<td>topPercentileCutoff</td>
		<td>The percentage cutoff point of rows to be given the topPercentileClass</td>
		<td>0.3</td>
	</tr>
	<tr>
		<td>bottomPercentileClass</td>
		<td>The css class setting to be used for table rows below the bottomPercentileCutoff</td>
		<td>dimmed</td>
	</tr>
	<tr>
		<td>bottomPercentileCutoff</td>
		<td>The percentage cutoff point of rows to be given the bottomPercentileClass</td>
		<td>0.8</td>
	</tr>
	<tr>
		<td>opacityFadeout</td>
		<td>Gradually fade departures in the list</td>
		<td>true</td>
	</tr>
	<tr>
		<td>opacityLow</td>
		<td>Gradually fade from 1 down to this opacity value</td>
		<td>0.5</td>
	</tr>
	<tr>
		<td>showHeaders</td>
		<td>Show column headers</td>
		<td>true</td>
	</tr>
	<tr>
		<td>lineHeader</td>
		<td>Text for the line column header. (The value will be translated if a translation exists)</td>
		<td>Line</td>
	</tr>
	<tr>
		<td>departureHeader</td>
		<td>Text for the departure column header. (The value will be translated if a translation exists)</td>
		<td>Departure</td>
	</tr>
	<tr>
		<td>destinationHeader</td>
		<td>Text for the destination column header. (The value will be translated if a translation exists)</td>
		<td>Destination</td>
	</tr>
	<tr>
		<td>stopHeader</td>
		<td>Text for the stop name column header. (The value will be translated if a translation exists)</td>
		<td>Stop</td>
	</tr>
	<tr>
		<td>truncateDestination</td>
		<td>If set to a numeric value, destination names will be truncated to this length</td>
		<td>false</td>
	</tr>
</table>
