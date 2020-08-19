export default (sequelize, DataTypes) => {
  const items = sequelize.define(
    'items',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price:{
        type: DataTypes.BIGINT,
        allowNull:false,
      },
      food_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      photoUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue:'active',
      }
    },
    {},
  );

  items.associate = (models) => {
    items.hasMany(models.comments, {
      foreignKey: 'id',
      as: 'origin_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return items;
};
