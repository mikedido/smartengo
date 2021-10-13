const expressLoader = require('./express');

module.exports = async (app) => {

    await expressLoader(app);
    console.log('Express and swagger Initiazed');
    // more loaders can be initialzed here
}