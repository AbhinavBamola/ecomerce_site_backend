const jwt=require('jsonwebtoken');
const secret="Mysecretisthejiophone"

function createToken(user){
    const payload={
        _id:user._id,
        userName:user.userName,
        email:user.email,
        role:user.role,
        profileImage:user.profileImage
    }
    const token= jwt.sign(payload,secret);
    return token;
}

function verifyToken(token){
    const payload=jwt.verify(token,secret);
    return payload;
}

module.exports={createToken,verifyToken};