import pg from "pg";
const { Pool } = pg;

import { createTable } from "../model/users.js";
import { createtodoTable } from "../model/todos.js";

export const passport = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 3000
});

export async function queryPassport(){
    try{
        await passport.query("SELECT NOW()")
        console.log("database connected")

        createTable();
        createtodoTable();

    } catch(err){
        console.log("database failed")
    }
}