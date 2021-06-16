const mongoose = require("mongoose");
const private = require("../private");

// connect to database
mongoose.connect(private.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log(`connection sucessful`);
}).catch(() => {
    console.log(`no connection`);
})