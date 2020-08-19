export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('rates', {
    
  });
}
export function down(queryInterface) {
  return queryInterface.dropTable('rates');
}
