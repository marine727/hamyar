const moment = require('moment-jalaali');
const getFullJalaliStandard = (date) => {
    //get 1371-4-12112:059:00 ==> return 1371-04-12 11:05:00
    return moment(date, 'jYYYY-jMM-jDD HH:mm:ss').format('jYYYY-jMM-jDD HH:mm:ss');
}
module.exports = getFullJalaliStandard;