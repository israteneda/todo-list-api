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

exports.create_a_task = function(req, res){
  Task.create({
    task: req.body.task,
    status: req.body.status,
    description: req.body.description,
    deadline: new Date(req.body.deadline)
  })
  .then( task => { 
      console.log("Tarea creada") 
      res.send(task);
    })
  .catch( err => {
    console.log("Error");
    res.send(err);
  })
}

exports.read_a_task = function(req, res){
  Task.findByPk(req.params.taskId)
  .then(task => { 
      res.send(task);
    })
  .catch( err => {
    console.log("Error");
    res.send(err);
  })
}

exports.update_a_task = function(req, res){
  Task.update({
    task: req.body.task,
    status: req.body.status,
    description: req.body.description,
    deadline: new Date(req.body.deadline)
  },{
  where: {
      id: req.params.taskId,
    }
  })
  .then(taskDeleted => { 
      console.log('Dato Actualizado');
      console.log(task);
      if (taskDeleted)
        res.send('Dato Actualizado');
    })
  .catch( err => {
    console.log("Error");
    res.send(err);
  })
}

exports.delete_a_task = function(req, res){
  Task.destroy({
    where: {
      id: req.params.taskId,
    }  
  })
  .then(() => { 
      console.log('Dato Eliminado');
      res.send('Dato Eliminado');
    }
  )
  .catch( err => {
    console.log("Error");
    res.send(err);
  })
}

