const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('../router/user');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../config/swagger');

module.exports = async (app) => {
    //router
    app.use('/v1/users', userRouter);
    //swagger
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false}));

    return app;
}