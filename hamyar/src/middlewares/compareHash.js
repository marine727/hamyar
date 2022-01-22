const bcrypt = require('bcryptjs');

const hashPassword = (insertPass , userPass) => {
    return bcrypt.compareSync(insertPass, userPass);
}
module.exports = hashPassword;
