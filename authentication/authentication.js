const {verifyToken}=require('../service/tokenprovider');

async function checkifuserissignedin(req,res,next) {
    try{
        const token=req.cookies.token;
        console.log(req.cookies)
        if(!token) {
            req.user=null;
            console.log("No token provided")
            next();
            return;
        }
        const payload=verifyToken(token);
        req.user=payload;
        next();
    }
    catch(error){
        console.log(error);
    }
}

module.exports={checkifuserissignedin};