let mongoose = require("mongoose");

let AdminSchema = mongoose.Schema({
    task: {
        type: String,
    },
    categories: {
        type: String,
    },
    description: {
        type: String,
    },
    Create: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
    },
    0
})

let adminpanel = mongoose.model('admin', AdminSchema);
module.exports = adminpanel;