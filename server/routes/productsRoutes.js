const express = require ('express')
const router = express.Router()

const multer=require("multer")

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/uploads')
    },
    filename:function(req,file,cb){
        const uniqueSuffix=Date.now()+"-"+Math.round(Math.random()*1E9)
        cb(null,uniqueSuffix+"-"+file.originalname)
    }
})

const upload=multer({storage:storage})

const productController = require ('../controllers/productsController')
//middlewares for verify:
const verifyJWT=require('../middlewares/verifyJWT')
const verifyAdmin=require("../middlewares/verifyAdmin")

//every one can look, even if they aren't loggin.
router.get("/",productController.getAllProducts)
router.get("/:barcod",productController.getProductById)
//only admin!
router.use(verifyJWT)
router.use(verifyAdmin)
router.get("/admin/get",productController.getAllProductsForAdmin)
router.get("/admin/:barcod",productController.getProductByIdForAdmin)
router.post("/",upload.single("image"),productController.createNewProduct)
router.delete("/",productController.deleateProduct)
router.put("/",upload.single("image"),productController.updateProduct)

module.exports = router

