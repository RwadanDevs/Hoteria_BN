export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('orders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT,
    },
    items: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    origin_type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    origin_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    server: {
      type:Sequelize.STRING,
      allowNull:true,
    },
    total_cost:{
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    timestamp: {
      type: Sequelize.BIGINT,
      allowNull:false,
    },
    status:{
      type: Sequelize.STRING,
      allowNull:true,
      defaultValue:'pending',
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
  return queryInterface.dropTable('orders');
}
