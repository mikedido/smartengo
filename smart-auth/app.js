const express = require('express');
const app = express();
const userRouter = require('./router/user');


//API router 
app.use('/v1/users', userRouter);


if (process.env.NODE_ENV !== 'test') {
    app.listen(process.env.PORT || 3000);
}

module.exports = app;