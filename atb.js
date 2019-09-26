const request = require('request');
const QuickXML = require('./quickxml');

const minskjermApi = "http://st.atb.no/New/minskjerm/DataHandler.ashx?type=departureTimes&lang={{lang}}";

class ATB {
    constructor(lang) {
        this.minskjermApi = minskjermApi.replace("{{lang}}", lang);
    }

    stopsToQueryParam(stops) {
		return stops.map((stop) => [
			1,
			stop.id,
			stop.line,
			stop.name
		].join(',')).join('|');
    }

    getDepartureTimes(stops, rows, visMode) {
        return new Promise((resolve, reject) => {
            rows = rows || 5;
            visMode = visMode || 2;

            const formData = {
                terminal: this.stopsToQueryParam(stops),
                rows: rows,
                visMode: visMode
            };

            const options = {
                url: this.minskjermApi,
                method: 'POST',
                form: formData
            };

            try {
                request(options, (error, response, body) => {
                    if (!error && (response.statusCode == 200 || response.statusCode == 304)) {
                        resolve(QuickXML.xmlToObj(body));
                    } else {
                        reject({
                            error: error,
                            formData: formData,
                            status: response ? response.statusCode : 0
                        });
                    }
                });
            } catch(e) {
                reject(e.toString());
            }
        });
    }
}

module.exports = ATB;

