const express = require("express");
const path = require("path");
// require mongobdb 15:00 - 20:00
const app = express();
const PORT = process.env.PORT || 8001


// middleware and setting paths
app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "hbs");

// routing
app.get("/", (req, res)=>{
    // res.send("Hello, I'm there");
    res.render("index");
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})