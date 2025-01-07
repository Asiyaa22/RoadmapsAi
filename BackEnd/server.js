import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const api = "";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Building Roadmaps powered by AI🚀");
});

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});