const express=require('express');
const upload=require('../models/multeruploader.js');
const router=express.Router();
const {handlesignin,handlelogout,handlesignup}=require('../controller/user');

router.post('/signin',handlesignin);
router.post('/signup',upload.single('profileImage'),handlesignup);
router.post('/logout',handlelogout);

module.exports=router;