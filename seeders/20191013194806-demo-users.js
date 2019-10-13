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
        task: 'Terminar página con Flutter',
        createdAt: new Date(),
        updatedAt: new Date() 
    },
    {
        task: 'Terminar cursos de Flutter',
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
