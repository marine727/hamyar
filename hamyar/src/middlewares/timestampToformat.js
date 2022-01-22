const moment = require("moment-jalaali");
const timestampToformat = (timestamp, format = "YYYY-MM-DD HH:mm:ss") => {
    return moment(timestamp).format(format);
}

module.exports = timestampToformat;