const moment = require("moment-jalaali");
moment.loadPersian({
    usePersianDigits: false,
    dialect: 'persian-modern'
    });

const timestampToformat = (timestamp) => {
    const x = (timestamp && 1*timestamp) || 0;
    const d4 = moment(x);
        
    return {
            y: d4.format('jYYYY'),
            m: d4.format('jMMMM'),
            d: d4.format('jD'),
            time: d4.format('HH:mm'),
            full: d4.format('jYYYY-jM-jD HH:mm:ss'),
            date: d4.format('jYYYY-jM-jD'),
            w:d4.format('dddd')
    }
  }      
  module.exports = timestampToformat;