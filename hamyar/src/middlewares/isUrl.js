const validator = require('validator');

const isUrl = (str) => {
    return validator.isURL(str);
}
module.exports = isUrl;