Module.register("MMM-AtbSanntid",{
	defaults: {
		lang: "no",
		initialLoadDelay: 1000,
		updateInterval: 60000,
		stops: [{id: 16010011, name: "Nidarosdomen", direction: 1, lines: ''}],
		rows: 7
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
			Log.info("REQUEST ATBSANNTID DATA");
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
		return {
			config: this.config,
			departures: this.departures,
			error: this.error
		};
	}
});

