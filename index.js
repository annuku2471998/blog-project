
import express from "express";


const app = express();


app.get("/", (req, res) => {
    res.send("haloo i am root...");
})


app.listen(3030, () => {
     console.log("port is start..");
});