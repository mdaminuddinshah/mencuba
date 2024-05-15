import jwt from "jsonwebtoken";

const isAuth = (req,res,next) => {
    const bearerToken = req.headers.authorization;
    console.log(bearerToken)
    
    // waktu nak createTodos, kalau takda token kat headers, dia akan error
    if(!bearerToken){
        return res.status(404).json({
            message: "unauthorized"
        })
    }
   

    // check if token is valid
    const token = bearerToken.split(" ")[1];
    
    const secretKey = "jwtToken";
    jwt.verify(token, secretKey, (err, decoded) => {
        if(err){
            return res.status(404).json({
                message: "invalid token"
            })
        }
        console.log(decoded)


        // to pass id and email to controller read.js todos
        req.id = decoded.id;
        req.email = decoded.email;
        next();
    });


    
}

export default isAuth;