export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('transactions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT,
    },
    author_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    author_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    details: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    product_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    product_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status:{
      type: Sequelize.STRING,
      allowNull:true,
      defaultValue:'active',
    },
    createdAt: {
      type: Sequelize.DATE, 
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE, 
      defaultValue: Sequelize.NOW,
      allowNull:false
    },
  });
}
export function down(queryInterface) {
  return queryInterface.dropTable('transactions');
}
