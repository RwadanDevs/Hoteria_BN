export default (sequelize, DataTypes) => {
  const orders = sequelize.define(
    'orders',
    {
      items: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      origin_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      origin_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      server: {
        type: DataTypes.STRING,
        allowNull:true,
      },
      total_cost:{
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      timestamp: {
        type: DataTypes.BIGINT,
        allowNull:false,
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
