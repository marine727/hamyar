const isEmpty = (str) => {
    if(!str)
        return true

    if(str.trim().length === 0){
        return true
    }else
        return false
}
module.exports = isEmpty;