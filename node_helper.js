const NodeHelper = require('node_helper');
const ATB = require('./atb');

module.exports = NodeHelper.create({
    socketNotificationReceived: function(notification, payload) {
        if(notification === 'GET_ATBSANNTID_DATA') {
            this.getAtbData(payload);
        }
    },

    getAtbData: function(payload) {
        const atb = new ATB(payload.lang);
        atb.getDepartureTimes(payload.stops, payload.rows, 2)
        .then((result) => {
            this.sendSocketNotification('ATBSANNTID_DATA', result.dataset );
        })
        .catch((error) => {
            this.sendSocketNotification('ATBSANNTID_ERROR', { error: error });
        });
    }
});

