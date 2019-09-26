Module.register("MMM-AtbSanntid",{
	defaults: {
		lang: "no",
		initialLoadDelay: 1000,
		updateInterval: 60000,
		stops: [{id: 16010011, name: "Nidarosdomen", lines: ''}],
		rows: 10,
		tableClass: '',
		headerClass: 'small align-left',
		bodyClass: 'small light align-left',
		cellPadding: '0px 7px',
		showIcon: true,
		topPercentileClass: 'bright',
		topPercentileCutoff: '0.3',
		bottomPercentileClass: 'dimmed',
		bottomPercentileCutoff: '0.8',
		opacityFadeout: true,
		opacityLow: 0.5,
		showHeaders: true,
		lineHeader: 'Line',
		departureHeader: 'Departure',
		destinationHeader: 'Destination',
		stopHeader: 'Stop',
		truncateDestination: false
	},

	start: function() {
		Log.info("Starting module: " + this.name);

		this.departures = null;
		this.error = null;

		this.scheduleUpdate(this.config.initialLoadDelay);
	},

	scheduleUpdate: function(delay) {
		const nextLoad = (typeof delay !== "undefined" && delay >= 0)
			? delay
			: this.config.updateInterval;

		setTimeout(() => {
			this.sendSocketNotification('GET_ATBSANNTID_DATA', {
				updateInterval: this.config.updateInterval,
				lang: this.config.lang,
				stops: this.config.stops,
				rows: this.config.rows
			});

			this.scheduleUpdate();
	 	}, nextLoad);
	},

	notificationReceived(notification, payload, sender) {
		// Do nothing
	},

    socketNotificationReceived: function(notification, payload) {
        if(notification === 'ATBSANNTID_DATA') {
			this.departures = payload.row;

			this.updateDom();
        } else if(notification === 'ATBSANNTID_ERROR') {
			this.error = notification;
			console.error(notification, payload);
		} else {
			console.info(notification, payload);
		}
    },

    getTranslations: function() {
        return {
			en: "translations/en.json",
            nb: "translations/nb.json"
        }
    },

	getTemplate: function() {
		return "MMM-AtbSanntid.njk";
	},

	getTemplateData: function() {
		this.config.thAttribs = 'style="padding:'+this.config.cellPadding+'"';
		this.config.tdAttribs = 'style="padding:'+this.config.cellPadding+'"';

		this.config.lineHeader = this.translate(this.config.lineHeader);
		this.config.departureHeader = this.translate(this.config.departureHeader);
		this.config.destinationHeader = this.translate(this.config.destinationHeader);
		this.config.stopHeader = this.translate(this.config.stopHeader);

		return {
			config: this.config,
			departures: this.departures,
			error: this.error
		};
	},

	getStyles: function() {
		return ['font-awesome.css'];
	}
});
