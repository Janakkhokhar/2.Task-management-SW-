let mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
    task: {
        type: String,
    },
    categories: {
        type: String,
    },
    description: {
        type: String,
    }

})

let userpanel = mongoose.model('user', UserSchema);
module.exports = userpanel;