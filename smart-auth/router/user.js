const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const userController = require('../controllers/user');

/**
 * @swagger
 * /v1/users/signin:
 *  get:
 *      description : Get user information
 *      parameters:
 *      - name : email
 *        description : The email of the user
 *        in : query
 *        required: true
 *        type : string
 *      - name : password
 *        description : The password of the user
 *        in : query
 *        required: true
 *        type : string
 *      responses:
 *          200:
 *              description : Success
 */
router.get('/signin', userController.signin);

/**
 * @swagger
 * /v1/users/signup:
 *  post:
 *      description : Get user information
 *      parameters:
 *      - name : email
 *        description : The email of the user
 *        in : formData
 *        required: true
 *        type : string
 *      - name : userName
 *        description : The userName of the user
 *        in : formData
 *        required: true
 *        type : string
 *      - name : password
 *        description : The password of the user
 *        in : formData
 *        required: true
 *        type : string  
 *      responses:
 *          201:
 *              description : Created
 */
router.post('/signup', userController.signup);

/**
 * @swagger
 * /v1/users/password:
 *  post:
 *      description : Get user information
 *      parameters:
 *      - name : email
 *        description : The email of the user
 *        in : formData
 *        required: true
 *        type : string
 *      - name : password 
 *        description : The password of the user
 *        in : formData
 *        required: true
 *        type : string  
 *      responses:
 *          201:
 *              description : Created
 */
router.post('/password', userController.changePassword);

module.exports = router;