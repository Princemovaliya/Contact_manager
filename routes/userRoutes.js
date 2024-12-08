const express = require("express" );
const { registerUser,loginUser,currentUser}= require("../controllers/userControllers");
const router = express.Router()
const validateToken =require("../middlerware/validateTokenhandler");

router.post("/register",registerUser);
    

router.post("/login", loginUser );
router.get("/current",validateToken,currentUser);
module.exports = router;