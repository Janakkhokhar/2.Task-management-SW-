const express = require('express');
const routes = express.Router();

const usercontroller = require("../controller/usercontroller");


routes.post('/adduser', usercontroller.adduser);




routes.delete('/deleteuser/:id', usercontroller.deleteuser);






module.exports = routes;