import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";
import pg from "pg";
import bcrypt from "bcrypt";
// import cors from "cors";

env.config();

const app = express();
const port = process.env.BACKEND_PORT || 3000;

//DATABASE CONNECTION

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

db.connect();

//middlewares
app.use(express.static("public"));
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//     res.send("Building Roadmaps powered by AI🚀");
// });

app.get("/api/road", (req, res) => {
    res.send("Hello from Backend");
})

app.post("/api/register", (req, res) => {
    const { name, mail, ph_no, password} = req.body;
    console.log("Data Received", name, mail, ph_no, password);
    //hashing password
    bcrypt.hash(password, 10, async(err, hash) => {
        if(err){
            console.error("Error hashing password", err)
        }else{
            //inserting into database
            const saveData = await db.query("INSERT INTO usersInfo(name, mail, ph_no, password) VALUES($1, $2, $3, $4)",[name, mail, ph_no, hash])
            console.log("Data Saved Successfully", saveData);
        }
    })
    res.send("User Registered Successfully");
})

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});