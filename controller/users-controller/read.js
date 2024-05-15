import { passport } from "../../database/DBinit.js";

const readAllData = `
    SELECT * FROM users;
`;

const readDataById = `
    SELECT * FROM users WHERE id = $1
`;

export async function readAllDatas(req,res){
    try{

        // const datas = req.body;
        const datas = await passport.query(readAllData);
        const data = datas.rows
        res.status(200).json({
            message: "success query all",
            data : data
        })
        console.log("success query all data")
    } catch(err){
        res.status(404).json({
            message: "failed query data"
        })
        console.log("failed query data")
    }
}

export async function readDataWithId(req,res){
    try{
        const id = req.params.id;
        const datas = await passport.query(readDataById, [id]);
        const details = datas.rows

        res.status(200).json({
            message: "success query data with id",
            data: details
        })

        console.log("success query data with id")
    } catch(err){
        
        res.status(404).json({
            message: "failed query data with id"
        })
        console.log("failed query data with id")
    }
}