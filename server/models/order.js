export default (sequelize, DataTypes) => {
  const orders = sequelize.define(
    'orders',
    {
      
      item: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      itemCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      creator_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      creator_name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_cost:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      owner:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      prep_Status:{
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue:'pending',
      },
      status:{
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue:'pending',
      },
    },
    {},
  );

  orders.associate = (models) => {};
  return orders;
};
