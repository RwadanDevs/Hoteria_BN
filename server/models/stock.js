export default (sequelize, DataTypes) => {
  const products = sequelize.define(
    'products',
    {
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      price:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar:  {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status:{
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue:'pending',
      },
    },
    {},
  );

  products.associate = (models) => {};
  return products;
};
