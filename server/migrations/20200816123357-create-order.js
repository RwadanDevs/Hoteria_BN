export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('orders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT,
    },
    item: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    itemCount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    creator_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    creator_name:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    owner:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    prep_Status:{
      type: Sequelize.STRING,
      allowNull:true,
      defaultValue:'pending',
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
