const express = require('express');
const routes = express.Router();
const admincontroller = require('../controller/admincontroller')
 


routes.post('/Add_admin', admincontroller.Add_admin);

routes.put('/editadmin/:id', admincontroller.editadmin);

routes.delete('/deleteadmin/:id', admincontroller.deleteadmin);

routes.get('/viewAlluser', admincontroller.viewAlluser);




module.exports = routes;
