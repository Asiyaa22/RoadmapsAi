import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";
import pg from "pg";
import cors from "cors";

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
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//     res.send("Building Roadmaps powered by AI🚀");
// });

app.get("/", (req, res) => {
    res.json({ message: "Hello from Backend" });
})

// app.get("/plan", (req, res) => {
//     // res.render("plan.ejs");
//     res.sendStatus(200).json({ message: "Plan Route" });
//     console.log("Plan Route");
// });

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});