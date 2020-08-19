export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('items', {
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
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    price:{
      type: Sequelize.BIGINT,
      allowNull:false,
    },
    food_type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    photoUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status:{
      type: Sequelize.STRING,
      allowNull:true,
      defaultValue:'active',
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
  return queryInterface.dropTable('items');
}
