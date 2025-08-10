const express=require('express');
const upload=require('../models/multeruploader.js')
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

router.post('/create',admincheckermiddleware,upload.single('productImage'),handlecreateproduct)
router.post('/update',admincheckermiddleware,upload.single('productImage'),handleupdateproduct)
router.post('/delte',admincheckermiddleware,handledeletproduct)

router.get('/getallproducts',handlegetallproducts)
router.get('/productdetails/:id',getcertainproductsdetails)


module.exports=router;