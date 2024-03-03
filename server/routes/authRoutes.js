const express = require("express")
const router = express.Router()

const authController=require("../controllers/authController")
//צריך לכאן הרשאה ?
router.post("/login",authController.login)
//every one can regist.
router.post("/register",authController.register)
//refresh token
router.get("/refresh",authController.refresh)
//log out
router.post("/logout",authController.logout)
module.exports = router