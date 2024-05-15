import { passport } from "../database/DBinit.js";


// id ni foreign key untuk users table
const queryTodotable = `
    CREATE TABLE IF NOT EXISTS todos(
        id SERIAL PRIMARY KEY,
        text VARCHAR(255) NOT NULL,
        todo_id INTEGER REFERENCES users(id),
        created_at TIMESTAMP DEFAULT NOW()
    );
`;

export async function createtodoTable(){
    try{
        await passport.query(queryTodotable);
        console.log("table todo created")
    }  catch(err){
        console.log("todo table failed")
    }
};