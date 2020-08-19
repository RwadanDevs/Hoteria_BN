export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('comments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    item_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    rate: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
  });
}
export function down(queryInterface) {
  return queryInterface.dropTable('comments');
}
