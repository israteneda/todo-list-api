'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return Promise.all([
     queryInterface.addColumn( 'Tasks', 'description', Sequelize.TEXT ),
     queryInterface.addColumn( 'Tasks', 'deadline', Sequelize.DATE ),
   ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn( 'Tasks', 'description' ),
      queryInterface.removeColumn( 'Tasks', 'deadline' ),
    ]);
  }
};
