const express = require('express');

const port = 9003;


const db = require("./cofig/mongoose");


const app = express();

app.use(express.urlencoded());

app.use('/admin', require('./routes/admin'));
app.use('/user', require('./routes/user'));


app.listen(port, (err) => {
    (err) ? console.log("server not connect") : console.log("server is connect", port);
})