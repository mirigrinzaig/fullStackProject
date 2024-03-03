const express = require("express")
const router = express.Router()
const usersController=require("../controllers/usersController")

//middlewares for verify:
const verifyJWT=require('../middlewares/verifyJWT')
const verifyAdmin=require("../middlewares/verifyAdmin")

//all the actions are for users
router.use(verifyJWT)
//אולי זו פעולה שמותרת למשתמש?
router.get("/:id",usersController.getUserById)

//all the actions are only for admin. user can't see the other users
router.use(verifyAdmin)
router.get("/",usersController.getAllUsers)
router.post("/",usersController.createNewUser)
router.delete("/",usersController.deleteUser)
router.put("/",usersController.update)

module.exports = router