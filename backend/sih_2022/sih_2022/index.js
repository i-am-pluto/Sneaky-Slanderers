const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const corsMiddleware = require("./cors");

// set up express app
const app = express();
app.use(corsMiddleware);

// connect to mongdb
mongoose
    .connect("mongodb://127.0.0.1:27017/sample_db", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected");
    })
    .catch((err) => {
        console.log("Not Connected to DB ", err);
    });
mongoose.Promise = global.Promise;

// to access all the data from body in json format.
app.use(bodyParser.json());

// initialise routes.
app.use(routes);

// listen for requests
app.listen(process.env.port || 4000, function() {
    console.log("now listending for reqeusts");
});