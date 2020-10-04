export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    type:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    avatar:  {
      type: Sequelize.STRING,
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
  return queryInterface.dropTable('products');
}
