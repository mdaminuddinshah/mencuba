import { passport } from "../database/DBinit.js";


// id ni ialah primary key untuk todos table
const queryCreateTable = `
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        is_admin BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW()
    );
`;

export async function createTable(){
    try{
        await passport.query(queryCreateTable);
        console.log("table users created")
    } catch(err){
        console.log("table users failed")
    }
}