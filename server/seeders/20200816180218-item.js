import dotenv from 'dotenv';

dotenv.config();

export async function up(queryInterface) {
  return queryInterface.bulkInsert(
    'items',
    [
      {
        name: 'CocaCola / Soda',
        food_type: 'refreshment / Drink',
        description: 'Cold or RoomTemp',
        price:2000,
        photoUrl:'https://www.cokesolutions.com/content/cokesolutions/site/us/en/products/brands/coca-cola/coca-cola.main-image.400-575.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Beef',
        food_type: 'Meal',
        description: 'Cow Meat',
        price:20000,
        photoUrl:'https://www.jocooks.com/wp-content/uploads/2020/04/roast-beef-1-32x40.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'ihu',
        food_type: 'vegetable',
        description: 'green vegetable or salad',
        price:10000,
        photoUrl:'https://www.jocooks.com/wp-content/uploads/2020/04/roast-beef-1-32x40.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  );
}
export function down(queryInterface) {
  return queryInterface.bulkDelete('items', null, {});
}
