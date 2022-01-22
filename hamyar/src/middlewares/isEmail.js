const validator = require('validator');

const isEmail = (str) => {
    return validator.isEmail(str);
}
module.exports = isEmail;