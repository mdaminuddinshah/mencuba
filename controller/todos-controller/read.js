import { passport } from "../../database/DBinit.js";

const reqAllTodo = async (req,res) => {

    const userId = req.id;

    try{
        const queryAllTodos = `
        SELECT * FROM todos WHERE todo_id = $1
    `;
    

        const data = await passport.query(queryAllTodos, [userId]);
        const details = data.rows;
        res.status(200).json({
            message: "success query all todos by id",
            details: details
        })

    } catch(err){
        res.status(404).json({
            message: "cannot query all todos"
        })
        console.log("cannot query all todos")
    }
    
    
}

export default reqAllTodo;