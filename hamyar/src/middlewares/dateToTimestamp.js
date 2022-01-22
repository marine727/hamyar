const dateToTimestamp = (date) => {
    // date should geregorian
    return new Date(date).getTime();//return milliseconds
}
module.exports = dateToTimestamp;