const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// crate schema for ip addresses
const ipSchema = new Schema({
    ipAddress:{
        type:String,
    },
});

const Ip=mongoose.model('ip',ipSchema);

module.exports=Ip;