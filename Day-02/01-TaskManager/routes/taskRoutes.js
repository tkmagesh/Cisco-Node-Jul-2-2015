var express = require('express');
var router = express.Router();

var taskList = [
    {id :1, name : "Book tickes for the movie", isCompleted : false},
    {id :2, name : "Plan for the travel", isCompleted : false},
    {id :3, name : "Fix the bug", isCompleted : false}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(taskList);
});

module.exports = router;
