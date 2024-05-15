import { passport } from "../../database/DBinit.js";

const createTodos = async (req,res) => {
    try{
        const queryTodos = `
            INSERT INTO todos(text, todo_id)
            VALUES($1, $2)
        `;

        const text = req.body.text;
        const userId = req.id;

        passport.query(queryTodos, [text, userId]);
        res.status(201).json({
            message: "todos created"
        })

        console.log("todos created")

    } catch(err){   
        res.status(404).json({
            message: "error create todos"
        })

        console.log("error create todos")
    }
}

export default createTodos