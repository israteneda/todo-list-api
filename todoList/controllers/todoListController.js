'use strict';

// var Task = require('../models/todoListModel');
var Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../todo_list.sqlite3',
  define: {
    timestamps: true
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
const Task = sequelize.define('task', {
  // attributes
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  task: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  status: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    allowNull:false
  }
}, {
  // options
});

Task.create({ 
    task: 'Buscar Bugs',
    status: 1, 
  }).then(task => {
  console.log("Esta tarea a generado el ID:", task.id);
})
.then(function(task) {
    // you can now access the newly created user
    console.log('Creación exitosa');
})
.catch(function(err) {
    // print the error details
    console.log(err);
});

Task.sequelize.sync().then(function() {
    console.log('connected to database')
}).catch(function(err) {
    console.log(err)
});

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