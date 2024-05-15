<!-- CARA BUAT HASHED PASSWORD -->
1. npm i bcrypt
2. import bcrypt from "bcrypt" kat create.js
3. create variable for saltRound e.g. 10
4. create variable for genSaltSync(saltRound)
5. create variable for hashSync(password, variable4)
6. pool.query(query, [variable5])

brcypt for change password into hashed
const saltRounds = 10;
1. bcrypt.genSaltSync(saltRounds);
2. bcrypt.hashSync(password, genSaltSync);

how to compare hashed password and user password 
e.g. dasdfasdfsd12qex23c2 = 123456789
1. bcrypt.compareSync(password, db.rows[0].password)

to create token, need to instal jsonwebtoken: npm i jsonwebtoken
1. const token = jwt.sign({ foo: 'bar' }, 'shhhhh');


<!-- lepas dah create todos nak buat apa ? kat bahagian read.js and auth.js utk createToken -->


lepas setel dekat read.js kat todos folder
1. create login.js utk login user dan create token
    - dalam login.js create logic 
        1. logic email and password provided
        2. logic email exist or not
        3. logic password correct or not using bcrypt.compareSync(pwd, user.password)
        4. logic utk create token using
            - jwt.sign(data, secretkey);
            - data dalam object
            - secretkey dalam string

2. create folder middleware
    - create authenticate.js, dalam ya ada logic:
        1. logic for token provided or not in create.js and read.js using req.headers.authorization
        2. logic for valid or not, using jwt.verify(token, secretkey, (err, decoded) => {if(err){res.status(404).json({message: "invalid token"})}})
        3. logic for decoded
            - const userId = decoded.id
            - const userEmail = decoded.email
            <!-- atas ni, digunakan untuk pass ke controller
            maksudnya, create.js dan read.js tak perlu isi id,
            hanya perlu pass dari middleware ke controller -->

3. go back to read.js and create.js todos
    - kena ubah userId utk read dan create tu dengan userId dari middleware
    