export default (sequelize, DataTypes) => {
  const transactions = sequelize.define(
    'transactions',
    {
      author_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      author_name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      details:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity:{
        type: DataTypes.INTEGER,
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

  transactions.associate = (models) => {};
  return transactions;
};
