const express = require("express");
const router = express.Router();
const Ip = require("../models/ipAddresses");

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Verify ip;
router.get("/ipVerify", function(req, res) {
    res.send({ status: true });
});

// add ip
router.get("/ipAdd", function(req, res) {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    Ip.create({ ipAddress: ip }).then(function(ip) {
        res.send(ip);
    });
    console.log(ip); // ip address of the user
});

router.get("/getIp", function(req, res) {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    res.send(JSON.stringify({ ipAddress: ip }));
});

module.exports = router;