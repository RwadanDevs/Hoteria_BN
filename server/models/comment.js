export default (sequelize, DataTypes) => {
  const comments = sequelize.define(
    'comments',
    {
      item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rate: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue:0
      },
    },
    {},
  );
  comments.associate = (models) => {
    comments.belongsTo(models.items, { foreignKey:'item_id',targetKey:'id' })
  };
  return comments;
};
