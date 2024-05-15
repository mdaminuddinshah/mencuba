import { passport } from "../../database/DBinit.js";

const queryUpdateData = `
    UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4
`;

export async function updateData(req,res){
    try{

        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const id = req.params.id;

        await passport.query(queryUpdateData, [username, email, password, id]);
        res.status(200).json({
            message: "success update data"
        })
        console.log("success update data")
    } catch(err){

        res.status(404).json({
            message: "failed update data"
        })

        console.log("failed update data")
    }
}