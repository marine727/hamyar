const regex=require('persian-tools2');

const isIrNationalId = (nationalCode) => {
    return regex.verifyIranianNationalId(nationalCode);
}
module.exports = isIrNationalId;