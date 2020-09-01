import dotenv from 'dotenv';

dotenv.config();

export async function up(queryInterface) {
  return queryInterface.bulkInsert(
    'items',
    [
      {
        name: 'Cream sherry',
        food_type: 'Drinks',
        description: 'Room Temperature',
        price:500,
        photoUrl:'https://www.thecocktaildb.com/images/ingredients/Cream%20Sherry.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Vodka',
        food_type: 'Drinks',
        description: 'Room Temperature',
        price:250,
        photoUrl:'https://www.thecocktaildb.com/images/ingredients/vodka.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Gin',
        food_type: 'Drinks',
        description: 'Room Temperature',
        price:150,
        photoUrl:'https://www.thecocktaildb.com/images/ingredients/gin.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Whisky',
        food_type: 'Drinks',
        description: 'Neat or Room Temperature',
        price:200,
        photoUrl:'https://www.thecocktaildb.com/images/ingredients/whisky.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Coca Cola',
        food_type: 'Drink',
        description: 'Cold or RoomTemp',
        price:10,
        photoUrl:'https://www.cokesolutions.com/content/cokesolutions/site/us/en/products/brands/coca-cola/coca-cola.main-image.400-575.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Tequila',
        food_type: 'Drinks',
        description: 'Room Temperature',
        price:100,
        photoUrl:'https://www.thecocktaildb.com/images/ingredients/tequila.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );
}
export function down(queryInterface) {
  return queryInterface.bulkDelete('items', null, {});
}
