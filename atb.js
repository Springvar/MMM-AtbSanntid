const request = require('request');
const QuickXML = require('./quickxml');

const minskjermApi = "http://st.atb.no/New/minskjerm/DataHandler.ashx?type=departureTimes&lang={{lang}}";

class ATB {
    constructor(lang) {
        this.minskjermApi = minskjermApi.replace("{{lang}}", lang);
    }

    stopsToQueryParam(stops) {
		return stops.map((terminal) => [
			terminal.direction,
			terminal.id,
			terminal.lines,
			encodeURIComponent(terminal.name)
		].join(',')).join('|');
    }

    getDepartureTimes(stops, rows, visMode) {
        return new Promise((resolve, reject) => {
            rows = rows || 5;
            visMode = visMode || 2;

            const options = {
                url: this.minskjermApi,
                method: 'POST',
                form: {
                    terminal: this.stopsToQueryParam(stops),
                    rows: rows,
                    visMode: visMode
                }
            };

            try {
                request(options, (error, response, body) => {
                    if (!error && (response.statusCode == 200 || response.statusCode == 304)) {
                        resolve(QuickXML.xmlToObj(body));
                    } else {
                        reject({
                            error: error,
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

