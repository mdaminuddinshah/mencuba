import { passport } from "../database/DBinit.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = async (req,res) => {
   
    try{
        const email = req.body.email;
        const pwd = req.body.password;

        // check if email and password is provided
        if(!email || !pwd){
            return res.status(404).json({
                message: "bad request"
            })
        }

        // check email exist or not by database
        const queryEmailDB = `
            SELECT * FROM users WHERE email = $1
        `;

        const queryDB = await passport.query(queryEmailDB, [email]);
        const users = queryDB.rows[0] 
    

        // check if the email exist or not
        if(!users){
            return res.status(404).json({
                message: "email not exist"
            })
        }

        // check if password is correct
        const comparePassword = bcrypt.compareSync(pwd, users.password);
        if(!comparePassword){
            return res.status(404).json({
                message: "wrong password"
            })
        }
        console.log(users)

        // how to create token when user login
        const dataToken = {
            email: users.email,
            id: users.id
        } 
        const secretKey = "jwtToken";
        const token = jwt.sign(dataToken, secretKey);

        res.status(201).json({
            message: "token created",
            data: token,
            details: users
        })
        console.log("token created");


    } catch(err){
        res.status(404).json({
            message: "cannot connect, error"
        })
        console.log("error")
    }
}

export default createToken;


/*
import bcrypt from "bcrypt"

const saltRounds = 10;

const gens = bcrypt.genSaltSync( saltRounds);
const hashedPassword = bcrypt.hashSync(password, gens);

*/