const userModel=require('../models/user.js');
const {createToken}=require('../service/tokenprovider.js');

async function handlesignin(req,res) {
    const {email,password}=req.body;
    const user=await userModel.findOne({email});
    if(!user) {
        res.json({error:"Invalid Email"})
    }
    if(await user.comparePasswords(password)){
        const token=createToken(user);
        console.log(token);
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"lax"
        }).json({success:"User signed in success fully"});
    }
    else{
    res.json({error:"Wrong password"})}
}

async function handlesignup(req,res) {
    const {userName,email,password}=req.body;
    const user=await userModel.findOne({email});
    if(user){
        res.json({error:"Email already exists"});
    }
    const newuser=await userModel.create({userName,email,password});
    const token=createToken(newuser);
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    res.json({success:"User created successfully"});
}

async function handlelogout(req,res) {
    if(req.cookies.token){
    res.clearCookie("token");
    req.user=null;
    res.json({success:"User Logged Out Successfully"});
}
}

module.exports={handlesignin,handlelogout,handlesignup};