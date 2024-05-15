import { passport } from "../../database/DBinit.js";
import bcrypt from "bcrypt";

const queryCreate = `
    INSERT INTO users(username, email, password)
    VALUES($1,$2,$3)
`;

export async function createDataUsers(req,res){
    try{

        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const saltRound = 10;
        const salt = bcrypt.genSaltSync(saltRound);
        const hashedPassword = bcrypt.hashSync(password, salt);

        await passport.query(queryCreate, [username, email, hashedPassword]);
        res.status(200).json({
            message: "success create data"
        })
        console.log("create data successful")
    } catch(err){
        res.status(404).json({
            message: "failed create data"
        })
        console.log("failed create data")
    }
}