const express = require("express");
const path = require("path");
// require mongobdb 15:00 - 20:00
const hbs = require("hbs");
const app = express();
const PORT = process.env.PORT || 8001


// middleware and setting paths
const public_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.use(express.static(public_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

// routing
app.get("/", (req, res) => {
    // res.send("Hello, I'm there");
    res.render("index");
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})