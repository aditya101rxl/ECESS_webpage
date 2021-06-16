const express = require("express");
const path = require("path");
const private = require("./private");
// require("./db/connect");
const hbs = require("hbs");
const eventModel = require("./models/event");
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

// console.log(private.CONNECTION_URL);
// routing
app.get("/", (req, res) => {
    // res.send("Hello, I'm there");
    res.render("index");
})
app.get("/gallery", (req, res) => {
    // res.send("Hello, Welcome to Gallery");
    res.render("gallery");
})
app.get("/add-event", (req, res) => {
    // res.send("Hello, Welcome Admin");
    res.render("add_event");
})
app.post("/add-event", async(req, res) => {
    console.log(req.body);
    // try {
    //     console.log(req.body);
    //     console.log(private.PASSWORD);
    //     const pass = req.body.password;
    //     if (pass === private.PASSWORD) {
    //         const event = new eventModel({
    //             heading: req.body.heading,
    //             date: req.body.date,
    //             details: req.body.details,
    //         });
    //         event.save()
    //             .then(() => {
    //                 res.redirect("/");
    //             })
    //             .catch(err => {
    //                 // res.redirect("/");
    //                 alert("Some error occured! try again");
    //             })
    //     } else {
    //         alert("Wrong Password!!! Try Again.");
    //     }
    // } catch (error) {
    //     res.status(400).send(error);
    // }
})
app.get("/add-photo", (req, res) => {
    // res.send("Hello, Welcome Admin");
    res.render("add-photo");
})
app.post("/add-photo", (req, res) => {
    console.log(private.PASSWORD);
    console.log("add-photo");
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})