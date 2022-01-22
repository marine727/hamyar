const moment = require('moment-jalaali');

const fullGregorianToFullJalali = (date) => {
    return moment(date, 'YYYY-MM-DD HH:mm:ss').format('jYYYY-jMM-jDD HH:mm:ss');
}
module.exports = fullGregorianToFullJalali;