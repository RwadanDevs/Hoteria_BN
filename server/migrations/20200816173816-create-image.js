export function up(queryInterface, Sequelize) {
    return queryInterface.createTable('images', {
      
    });
  }
  export function down(queryInterface) {
    return queryInterface.dropTable('images');
  }
  