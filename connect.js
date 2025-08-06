const mongoose=require('mongoose');

function connecttomonodb(){
   return mongoose.connect('mongodb://127.0.0.1:27017/ecomerce_dbs')
        .then(()=>{
            console.log("Database Connected");
        })
        .catch((err)=>{
            console.log(err);
        })
}

module.exports=connecttomonodb;