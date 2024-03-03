const jwt=require("jsonwebtoken")
const verifyJWT=(req,res,next)=>{
const authHeader=req.headers.authorization||req.headers.Authorization
if (!authHeader || !authHeader.toString().startsWith("Bearer")) {
    return res.status(401).json({message: "Unauthorized"})
  }
const token=authHeader.split(" ")[1]
jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,
    (err,decoded)=>{
        if(err)
            return res.status(403).json({message:"Forbiden user, err: "+err +" token: "+authHeader})
        req.user=decoded
        next()         
    })
}
module.exports=verifyJWT