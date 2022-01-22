const moment = require('moment-jalaali');

const isFullJalaliDate = (date) => {
    return moment(date, 'jYYYY-jMM-jDD HH:mm:ss').isValid();
}
module.exports = isFullJalaliDate;