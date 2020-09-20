export default (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      username: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      role:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      status:{
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue:'active',
      },
    },
    {},
  );

  users.associate = (models) => {};
  return users;
};
