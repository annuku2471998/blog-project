
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import ejsMate from 'ejs-mate';
import mongoose from "mongoose";
import Blog from "./models/blog.js";
import User from "./models/user.js";


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.engine('ejs', ejsMate);
app.set("view engine", "ejs");


const MONGODB_URI ="mongodb://localhost:27017/blogDB"

const main = async () => {
    await mongoose.connect(MONGODB_URI);
}

main().then(() => {
    console.log("Connected from database..");
}).catch((err) => {throw err});


app.get("/", (req, res) => {
    res.render("listings/index.ejs");
});

app.get("/user", (req, res) => {
    res.render("listings/new.ejs");

});

app.post("/user/posts", (req, res) => {
   res.render("listings/show.ejs");
    
})


app.listen(3030, () => {
     console.log("port is start..");
});