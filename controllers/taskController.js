'use strict';

var Task = require('../models').Task;

exports.list_all_tasks = function(req, res) {  
  Task.findAll()
    .then(tasks => {
      console.log("Todas las tareas:", JSON.stringify(tasks, null, 4));
      res.send(tasks)
    })
    .catch(err => {
      console.log("Error");
      res.send(err);
    });
}