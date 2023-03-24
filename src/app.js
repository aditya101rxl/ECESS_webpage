const express = require("express");
const path = require("path");
// const bodyParser = require('body-parser');
// const private = require("./private");
// require("./db/connect");
const hbs = require("hbs");
// const eventModel = require("./models/event");
const app = express();
const PORT = process.env.PORT || 8001

xdghdsfgh df

// middleware and setting paths
const public_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.use(express.static(public_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
// app.use(bodyParser.urlencoded({ extended: true }));

// routing

// home page router
app.get("/", (req, res) => {
        res.render("index");
    })
    // render gallery page
app.get("/gallery", (req, res) => {
    res.render("gallery");
})

// backend updates
/*


// fetching new events from DB
app.get("/add-event", (req, res) => {
    res.render("add_event");
})

// adding new events to DB
app.post("/add-event", async(req, res) => {
    console.log(req.body);
    try {
        console.log(req.body);
        const pass = req.body.password;
        if (pass === private.PASSWORD) {
            res.send(req.body);
            // save events to database

        } else {
            res.render("add_event", { status: 'alert-danger', message: "wrong password!!!... Try Again" });
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

// fatching photos from DB
app.get("/add-photo", (req, res) => {
    res.render("add-photo");
})

// adding new photos to DB
app.post("/add-photo", (req, res) => {
    console.log(private.PASSWORD);
    console.log("add-photo");
})


*/

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
