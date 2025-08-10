const express=require('express');
const router=express.Router();
const {handlecreateproduct,handledeletproduct,handlegetallproducts,handleupdateproduct,getcertainproductsdetails}=require('../controller/product.js');

function admincheckermiddleware(req,res,next){
    if(req.user.role=="admin"){
        next();
    }
    else{
        res.json({error:"Not Authorized"})
    }
}

router.post('/create',admincheckermiddleware,handlecreateproduct)
router.post('/update',admincheckermiddleware,handleupdateproduct)
router.post('/delte',admincheckermiddleware,handledeletproduct)

router.get('/getallproducts',handlegetallproducts)
router.get('/productdetails/:id',getcertainproductsdetails)


module.exports=router;