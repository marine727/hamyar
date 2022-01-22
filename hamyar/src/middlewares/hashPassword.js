const bcrypt = require('bcryptjs');

const hashPassword = (pass) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(pass, salt);
}
module.exports = hashPassword;
