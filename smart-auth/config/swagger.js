const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition : {
        info : {
            title : 'Smart auth',
            version : '1.0.0',
            description : 'Authenticate the users and authorize their actions'
        }
    },
    apis: ['app.js', 'router/*.js']
};

module.exports = swaggerJsDoc(swaggerOptions);