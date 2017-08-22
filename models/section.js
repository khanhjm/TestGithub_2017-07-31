var mongoose = require('mongoose');
// hashtable - mã hóa
// var bcrypt = require('bcryptjs');

var sectionSchema = mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    descr: {
        type: String
    },
    datecreated: {
        type: Date,
        "default": Date.now
    },
    dateupdate: {
        type: Date,
        "default": Date.now
    }
})

var section = module.exports = mongoose.model("section", sectionSchema);

module.exports = {
    //---------------------getAllSection--------------------
    getAllSection: function (req, res) {
        var response = {};
        section.find(function (err, data) {
            if (err) {
                console.log("getAll");
                response = { "error": true, "messeage": "Error fetching data" };
            } else {
                res.render('allSection', { Section: data });
            }
        })
    },
    //---------------------addSection--------------------
    addSection: function (req, res) {
        var dbSection = new Section();
        var response = {};
        dbSection.name = req.body.name;
        dbSection.descr = req.body.descr;
        dbSection.datecreated = new Date(req.body.datecreated);
        dbSection.dateupdate = new Date(req.body.dateupdate);
        dbSection.save(function (err) {
            if (err) {
                console.log("add");
                response = { "error": true, "message": "Error adding data" };
            } else {
                res.redirect('/allSection');
            }
        })
    },
    //---------------------deleteSection--------------------
    deleteSection: function (req, res) {
        var response = {};
        section.findById(req.params.id, function (err) {
            if (err) {
                response = { "error": true, "message": "Error fetching data" };
            } else {
                section.remove({ _id: req.params.id }, function (err) {
                    if (err) {
                        console.log("delete");
                        response = { "error": true, "message": "Error deleting data" };
                    } else {
                        res.redirect('/allSection');
                    }
                })
            }
        })
    },
    getSectionById: function (req, res) {
        var response = {};
        section.findById({ _id: req.params.id }, function (err, data) {
            if (err) {
                response = { "error": true, "message": "Error fetching data" };
            } else {
                res.render('editSection', { Sectiondata: data });
            }
        })
    },
    // ---------------------updateSection------------------
    updateSection: function (req, res) {
        var response = {};
        section.findById(req.params.id, function (err, dataSection) {
            if (err) {
                console.log("update");
                response = { "error": true, "message": "Error fetching data" };
            } else {
                if (req.body.name !== undefined) {
                    dataSection.name = req.body.name;
                }
                if (req.body.descr !== undefined) {
                    dataSection.descr = req.body.descr;
                }
                if (req.body.datecreated !== undefined) {
                    dataSection.datecreated = new Date(req.body.datecreated);
                }
                if (req.body.dateupdate !== undefined) {
                    dataSection.dateupdate = new Date(req.body.dateupdate);
                }
                dataSection.save(function (err) {
                    if (err) {
                        response = { "error": true, "message": "Error updating data" };
                    } else {
                        res.redirect('/allSection');
                    }
                })
            }
        })
    }
}

module.exports.getSectionNames = function (callback) {
    section.find(callback);
}