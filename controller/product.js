const productModel = require('../models/product.js');
const { all } = require('../route/product');

async function handlecreateproduct(req, res) {
    try{
        if(!req.file){
            throw new Error;
        }
    const { productName, description, price, category, stock } = req.body;
    const imageUrl='/'+req.file.path.replace(/\\/g,"/");
    await productModel.create({ productName, description,
         price, category, 
         stock, imageUrl })
         console.log("Product createdd")
         res.json({success:"Product Creates"})
    }
    catch(err){
        console.log(err);
    }
}
async function handledeletproduct(req,res) {
    try{
        const _id=req.body._id;
        await productModel.findByIdAndDelete(_id);
        console.log("Product delted");
        res.json({success:"Product Deleted"})
    }
    catch(err){
        console.log(err);
    }
}
async function handleupdateproduct(req,res) {
          try{
    const {_id, productName, description, price, category, stock} = req.body;
        const imageUrl='/'+req.file.path.replace(/\\/g,"/");
    await productModel.findByIdAndUpdate(_id,{ productName, description,
         price, category, 
         stock, imageUrl })
         console.log("Updated createdd")
         res.json({success:"Product Updated"})
    }
    catch(err){
        console.log(err);
    } 
}
async function handlegetallproducts(req,res) {
    try{
        const allproducts=await productModel.find({})
        res.products=allproducts;
        console.log("All products fetched")
        res.json(allproducts);
    }
    catch(error){
        console.log(error);
    }
}
async function getcertainproductsdetails(req,res) {
    try{
        const id=req.params.id;
        const product=await productModel.findById(id);
        res.product=product;
        console.log("Fetched product details")
        res.json({success:"Fetched product details"})
    }
    catch(error){
        console.log(error);
    }
}

module.exports={handlecreateproduct,handledeletproduct,handlegetallproducts,handleupdateproduct,getcertainproductsdetails}