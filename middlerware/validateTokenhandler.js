const asyncHandler =require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async(req,res,next) =>{
    let token;
    let authHeader=req.headers.Authorization || req.headers.authorization;
    console.log(authHeader)
    if(authHeader && authHeader.startsWith("Bearer"))
    {
        token=authHeader.split(" ")[1];
        console.log("token", token)
        // aa function perfect hatu, authentication ma token nakhto hato tu tyare agal Bearer add karvu pade
        // and userController ma response ma tu res.json(res.user) karto hato, apde user  req ma set karyo che to req.user avse
        /
        jwt.verify(token,process.env.ACCESS_TOKEN_SECERT,(err, decoded)=>{ // aya andar te req.user = descoded.user lakhyu hatu and callback ma decode j hatu ek d missing hato//ok
            if(err)
            {
                res.status(401);
                throw new Error("user is not authorized");   
            }
            req.user=decoded.user;
            next();
        });
        if(!token)
        {
            res.status(401);
            throw new Error("User is anothorized or token is missing");
            
        }

    }

})

module.exports= validateToken;