import express from "express";
import { homepage } from "./controller/health.js";
import { notExistPage } from "./controller/health.js";
import { queryPassport } from "./database/DBinit.js";
import { createDataUsers } from "./controller/users-controller/create.js";
import { readAllDatas } from "./controller/users-controller/read.js";
import { readDataWithId } from "./controller/users-controller/read.js";
import { updateData } from "./controller/users-controller/update.js";
import { deleteData } from "./controller/users-controller/delete.js";
import createTodos from "./controller/todos-controller/create.js";
import reqAllTodo from "./controller/todos-controller/read.js";
import createToken from "./controller/loginAuth.js";
import isAuth from "./middleware/Authenticate.js";

const PORT = 1009;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

queryPassport();

app.get("/", homepage);

// CRUD USERS
app.post("/register", createDataUsers);     // create
app.get("/readAll", readAllDatas );         // read
app.get("/readWithId/:id", readDataWithId); // read
app.put("/update/:id", updateData);         // update
app.delete("/delete/:id", deleteData)       // delete

// login
// kat login ni letak auth.js utk createToken bila kau login
// so bila dah createToken, token tu guna utk kat get reqAllTodo
// tapi nanti tak cukup tu, kita kena buat middleware utk read token tu
app.post("/login", createToken);

// CRUD TODOS
app.post("/createTodo", isAuth, createTodos);       // create
// so nanti kat sini, kita kena buat middleware utk read token
// middleware tu hanya utk kita authenticate token kita
// kalau token tu benar, maka success lah
// middleware utk kita authenticate token
app.get("/reqTodos", isAuth, reqAllTodo);           // read

// if not found
app.use(notExistPage);

app.listen(PORT);