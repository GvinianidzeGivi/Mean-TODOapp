var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://Givi:123qwe@ds253959.mlab.com:53959/crud', ['tasks'])
var mongoose = require('mongoose');

mongoose.connect('mongodb://Givi:123qwe@ds253959.mlab.com:53959/crud');

router.get('/tasks', function (req, res, next) {
    db.tasks.find(function (err, tasks) {
        if (err) {
            res.send(err);
        }
        res.json(tasks);
    });
});

router.get('/task/:id', function (req, res, next) {
    db.tasks.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});


router.post('/task', function (req, res, next) {
    var task = req.body;
    if (!task.title || (task.isDone)) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }
    else {
        db.tasks.save(task, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});


router.delete('/tasks/:id', function (req, res, next) {
    db.tasks.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});




router.put('/task/', function (req, res, next) {

    var task = req.body;
    var updTask = {};


    if (task.isDone) {
        updTask.isDone = task.isDone;
    }

    if (task.title) {
        updTask.title = task.title;
    }

    if (!updTask) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }
    else {
        db.tasks.update({ _id: mongojs.ObjectId(task._id) }, updTask, function (err, updTask) {
            if (err) {
                res.send(err);
            }
            res.json(updTask);
        });
    }

});


module.exports = router;    