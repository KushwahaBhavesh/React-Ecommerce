import express from 'express'
import { adminAuthController, adminSignupController, loginController, signupController, testController } from '../Controller/authController.js';
import { adminLoginMiddleware, userLoginMiddleware } from '../Middleware/authMiddleware.js';
const route = express.Router();


// User Register Method 
// --------->Method:POST
route.post('/signup', signupController)

//Login --->POST
route.post('/login', loginController)

route.get('/test', userLoginMiddleware,adminLoginMiddleware, testController)


// Admin Routes:---Post
route.post('/admin',adminSignupController)
route.post('/admin-login',adminAuthController)

export default route