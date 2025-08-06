const {Schema,model}=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');

const userSchema=new Schema({  
    userName:{
        type:String,
        required:true
    }
    ,email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:validator.isEmail,
            message:"Please enter A valid Email"
        }
    }
    ,password:{
        type:String,
        required:true,
    }
    ,role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
    ,profileImage:{
        type:String,
        default:'/uploads/download(1).jpeg'
    }
 },{timestamps:true})

userSchema.pre('save',async function(next) {
    const user=this;
    if(user.isModified('password')){
        const salt=10;
        const hashed=await bcrypt.hash(user.password,salt);
        user.password=hashed;
    }
    next();
})

userSchema.methods.comparePasswords= async(enteredPassword)=> {
    return await bcrypt.compare(enteredPassword,this.password);
}

 const userModel=model("ecomerceUser",userSchema);
 module.exports=userModel;
