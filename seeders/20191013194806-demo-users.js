'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      
    */
   return queryInterface.bulkInsert('Tasks', 
   [{
        task: 'Terminar todo con Express',
        description: 'Realizar las tareas faltantes en todo app',
        deadline: new Date(),
        createdAt: new Date(),
        updatedAt: new Date() 
    },
    {
        task: 'Terminar cursos de Flutter',
        description: 'Realizar la app de IMC y todo app',
        deadline: new Date(),
        createdAt: new Date(),
        updatedAt: new Date() 
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Tasks', null, {});
  }
};
