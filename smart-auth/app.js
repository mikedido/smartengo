const express = require('express');
const loaders = require('./loaders');

function startServer() {
    const app = express();

    loaders(app);

    app.listen(process.env.PORT || 3000, error => {
        if (error) {
            console.log(error);
            return;
        }
        console.log('Your server is running !');
    });
}

startServer();