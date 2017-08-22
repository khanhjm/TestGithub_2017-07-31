const express = require('express');
const router = express.Router();

var section = require('../models/section');

router.get('/', section.getAllSection);

router.get('/add', function (req, res) {
    res.render('section/addSection');
});
router.post('/add', section.addSection);

router.get('/delete/:id', section.deleteSection);

router.get('/edit/:id', section.getSectionById);
router.post('/edit/:id', section.updateSection);

module.exports = router;