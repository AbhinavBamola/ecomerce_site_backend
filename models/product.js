const {Schema,model}=require('mongoose');

const productSchema=new Schema({
    productName:{
        type:String,
        required:true,
    }
    ,description:{
          type:String,
        required:true, 
    }
    ,price:{
           type:String,
        required:true,
    }
    ,category:{
           type:String,
        required:true,
    }
,stock:{
       type:String,
        required:true,
}
,imageUrl:{
       type:String,
        required:true,
}
},{timestamps:true})

const productModel=model("productModel",productSchema);

module.exports=productModel;
