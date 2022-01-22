const validator = require('validator');

const isJson = (str) => {
    return validator.isJSON(str);
}
module.exports = isJson;