const seriousError = () => {
    const error = new Error('کارکتر های <(/?=.)> نباید مورد استفاده قرار گیرد.');
    error.code = 401;
    throw error;
}

module.exports = seriousError;