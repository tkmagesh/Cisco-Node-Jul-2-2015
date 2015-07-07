var express = require('express');
var router = express.Router();

var taskList = [
    {id :1, name : "Book tickes for the movie", isCompleted : false},
    {id :2, name : "Plan for the travel", isCompleted : true},
    {id :3, name : "Fix the bug", isCompleted : false}
];

/* GET home page. */
router.get('/', function(req, res, next) {
    var viewData = {list : taskList};
    res.render('tasks/index', viewData);
});

router.get('/new', function(req, res, next) {
  res.render('tasks/new');
});

router.post('/new', function(req, res, next) {

  var newId = taskList.reduce(function(result, task){
      return result > task.id ? result : task.id;
  }, 0) + 1;

  var newTask = {
      id : newId,
      name : req.body.taskname,
      isCompleted : false
  };
  taskList.push(newTask);
  res.redirect('/tasks');
});

router.get("/toggle/:id", function(req, res, next){
   var taskId = parseInt(req.param("id"),10);
    var task = taskList.filter(function(task){
        return task.id === taskId;
    })[0];
    if (task){
        task.isCompleted = !task.isCompleted;
    }
    res.redirect('/tasks');
});


module.exports = router;
