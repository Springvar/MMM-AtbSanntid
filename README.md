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
		<td>[{id: 16010011, name: "Nidarosdomen", direction: 1, lines: ''}]</td>
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
		<td>7</td>
	</tr>
	<tr>
		<td>lang</td>
		<td>Language of output returned from atb. Supported (no | en)</td>
		<td>no</td>
	</tr>
</table>
