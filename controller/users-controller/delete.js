import { passport } from "../../database/DBinit.js";

const queryDeleteData = `
    DELETE FROM users WHERE id = $1
`;

export async function deleteData(req,res){
    try{

        const id = req.params.id;
        await passport.query(queryDeleteData, [id]);
        res.status(200).json({
            message: "deleted data"
        })
        console.log("deleted data")
    } catch(err){
        res.status(404).json({
            message: "failed delete data"
        })
        console.log("failed delete data")
    }
}

