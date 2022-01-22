const generatePassword = (leng)=>{
    let code = leng;
    do {
        code =  Math.floor(Math.random()*Math.pow(10, leng)).toString();
    } while (code.length < leng);
    
    return code;
}
module.exports = generatePassword;
