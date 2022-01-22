const throwError = (data) => {
    if(data.message){
        const error = new Error(data.message);
        error.data = [{path: data.path? data.path: "error", message:data.message}];
        error.code = 400;
        throw error;
    }else
        return;
}

module.exports = throwError;