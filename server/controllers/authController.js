const User=require("../models/Users")
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')


//login
const login=async(req,res)=>{
    const {userName,password}=req.body
    if(!userName||!password){
        return res.status(400).json({message:"נא למלא את כל השדות"})
    }
    const foundUser=await User.findOne({userName}).lean()
    //not exist
    if(!foundUser)
        return res.status(401).json({message:"אחד מהפרטים שגוי, נסה שנית"})
    //validate password
    const match=await bcrypt.compare(password,foundUser.password)
    if(!match)
        return res.status(401).json({message:"סיסמא שגויה!"})
    //all the datails without password
    const userInfo={_id:foundUser._id,userName:foundUser.userName,name:foundUser.name,roles:foundUser.roles,email:foundUser.email}
    const accessToken=jwt.sign(userInfo,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'15m'})
    const refreshToken=jwt.sign({userName:foundUser.userName},process.env.REFRESH_TOKEN_SECRET,{expiresIn:'7d'})

    res.cookie("jwt",refreshToken,{
        httpOnly:true,
        maxAge:7*24*60*1000
    })
    res.json({accessToken: accessToken})
}
const refresh=async(req,res)=>{
const cookies=req.cookies
if(!cookies?.jwt){
    return res.status(401).json({message:"Unauthorized!!"})
}
const refreshToken=cookies.jwt
jwt.verify(refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async(err,decode)=>{
        if(err){
            return res.status(403).json({message:`Forbiden! ${err}, token:${refreshToken}`})
        }
        const foundUser=await User.findOne({userName:decode.userName})
        const userInfo={_id:foundUser._id,name:foundUser.name,roles:foundUser.roles,email:foundUser.email}
        const accessToken=jwt.sign(userInfo,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'15m'})
        res.json({accessToken:accessToken})
    })
}
//regist
const register=async(req,res)=>{
    const { name, password, userName, email, phone} = req.body;
    //required fields
    if(!name||!userName||!password)
       return res.status(400).json({message:"נא למלא את כל השדות"})
    //uniqe field
    const duplicate=await User.findOne({userName}).lean()
    if(duplicate)
        return res.status(409).json({message:"יש לכתוב שם משתמש שונה"})
    //bcrypt-password
    const hashPass=await bcrypt.hash(password,10)
    const updateUser={ name, password:hashPass, userName, email, phone}
    const user=await User.create(updateUser)
    //created
    //?צריך גם פה להחזיר טוקן
    if(user){
        return res.status(201).json({message:"The user "+user.userName+" created"})
    }
    else{
         //?צריך גם פה להחזיר טוקן
        return res.status(400).json({message:"Sorry, there is a mistake...."})
    } 
}
const logout=async(req,res)=>{
    const cookies=req.cookies
    if(!cookies?.jwt){
        return res.status(204).json({message:"No Content"})
    }
    res.clearCookie("jwt",{
        httpOnly:true
    })
    res.json("you logg out")
}
module.exports={login,register,refresh,logout}