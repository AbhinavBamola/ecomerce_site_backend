const express=require('express');
const router=express.Router();
const {handlesignin,handlelogout,handlesignup}=require('../controller/user');

router.post('/signin',handlesignin);
router.post('/signup',handlesignup);
router.post('/logout',handlelogout);

module.exports=router;