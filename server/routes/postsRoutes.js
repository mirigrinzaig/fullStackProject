const express = require ('express')
const router = express.Router()

// const multer=require("multer")

// const storage=multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'./public/uploads')
//     },
//     filename:function(req,file,cb){
//         const uniqueSuffix=Date.now()+"-"+Math.round(Math.random()*1E9)
//         cb(null,uniqueSuffix+"-"+file.originalname)
//     }
// })

// const upload=multer({storage:storage})



const postsController = require ('../controllers/postControllers')

//middlewares for verify:
const verifyJWT=require('../middlewares/verifyJWT')
const verifyAdmin=require("../middlewares/verifyAdmin")

//every one can look, even if they aren't loggin.
router.get("/",postsController.getAllPosts)
router.get("/:header",postsController.getPostById)
//only admin!
// router.use(verifyJWT)
// router.use(verifyAdmin)
router.get("/",postsController.getAllPostsForAdmin)
router.get("/:header",postsController.getPostByIdForAdmin)
router.post("/",postsController.createNewPost)
router.delete("/",postsController.deleatePost)
router.put("/",upload.single("image"),postsController.updatePost)


module.exports = router