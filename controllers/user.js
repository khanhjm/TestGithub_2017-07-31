const express = require('express');
const router = express.Router();
var Userdata = require('../models/user');
router.post('/user', Userdata.addUser);
router.get('/user', Userdata.getAllUser);
router.delete('/delete/:id', Userdata.deleteUser);
router.put('/update/:id', Userdata.updateUser);
router.get('/user/:id', Userdata.getUserByID);;
module.exports = router;