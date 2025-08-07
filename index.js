const express=require('express');
require('dotenv').config();
const conect_db=require('./connect.js');
const userRouter=require('./route/user.js')
const cookieparser=require('cookie-parser');
const { applyTimestamps } = require('./models/user.js');
const cors=require('cors');
const {checkifuserissignedin}=require('./authentication/authentication.js');


const PORT=process.env.PORT;

const app=express();
conect_db();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(checkifuserissignedin);


app.get('/api/me',checkifuserissignedin,(req,res)=>{
    console.log("User fetch request "+req.user);
    res.json(req.user||{});
})
app.use('/user',userRouter);

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
})