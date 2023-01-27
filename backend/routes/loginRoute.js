const express=require('express');
const Login =require('../controller/loginController');
const Signup = require('../controller/signupController');
const requireAuth = require('../middleware/requireAuth');

const loginroute=express.Router();

// use requireAuth in routes where you want authorization 
// loginroute.use(requireAuth);
loginroute.post('/signup',Signup)
loginroute.post('/login',Login)
module.exports=loginroute