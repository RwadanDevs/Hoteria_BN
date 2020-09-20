import dotenv from 'dotenv';

dotenv.config();

const Drinks = [{
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
  food_type: 'Drinks',
  description: 'Cold or RoomTemp',
  price:10,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/cocacola.png?raw=true',
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
},{
  name: 'Orange Juice',
  food_type: 'Drinks',
  description: 'Cold or RoomTemp',
  price:5,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/orange-juice.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Starwberry Juice',
  food_type: 'Drinks',
  description: 'Cold or RoomTemp',
  price:5,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/strawberry-juice.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Beer',
  food_type: 'Drinks',
  description: 'Cold or RoomTemp',
  price:1.50,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/beer.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'MilkShake',
  food_type: 'Drinks',
  description: 'RoomTemp',
  price:1.95,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/milkshake.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
}]

const salads = [{
  name: 'Salads Buffalo Wing',
  food_type: 'Salads',
  description: 'clipart caesar salad blackjack pizza salads buffalo wing olive oil leaf vegetable food',
  price:25.55,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/blackjack.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Clipart Salad',
  food_type: 'Salads',
  description: 'lipart bar pasta egg greek vegetable salad in nowl leaf vegetable',
  price:20,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/bar-pasta.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Clipart Salad',
  food_type: 'Salads',
  description: 'clipart caesar chicken submarine sandwich fattoush lettuce caesar chicken salad',
  price:23.85,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/chicken-salad.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Clipart Salad',
  food_type: 'Salads',
  description: 'clipart fast food health food recipe salad leaf vegetable',
  price:15,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/health-food.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Clipart',
  food_type: 'Salads', 
  description: 'fattoush european cuisine pizza fruit salad caesar leaf vegetable',
  price:10,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/fattoush-european.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
}]

const TakeAway = [{
  name: 'Pizza',
  food_type: 'TakeAway',
  description: 'Take Away',
  price:5,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/pizza.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Baked bread',
  food_type: 'TakeAway',
  description: 'Room Temperature',
  price:7,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/baked-breads.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Hamburger',
  food_type: 'TakeAway',
  description: 'Room Temperature',
  price:7,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/hamburger.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
}]

const fruites = [{
  name: 'Avocado',
  food_type: 'Fruits',
  description: 'Awesome Fruit',
  price:5,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/avocado.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Starwberry',
  food_type: 'Fruits',
  description: 'Delightful Fruit',
  price:5,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/strawberry.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Apple',
  food_type: 'Fruits',
  description: 'Tasteful Fruit',
  price:2,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/Apple.jpg?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
}]

const roasted = [{
  name: 'Beef',
  food_type: 'Roasted',
  description: 'Grilled Beef Bibs',
  price:4.69,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/steck.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Pork',
  food_type: 'Roasted',
  description: '3 Pork barbecues',
  price:4.69,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/pork-barbecues.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'coln',
  food_type: 'Roasted',
  description: 'grilled com lobs',
  price:3.99,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/grilled-corn-cobs.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Roasted Chicken',
  food_type: 'Roasted',
  description: 'Onions Roasted Chicken',
  price:22.20,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/roasted-chicken.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Roasted Turkey',
  food_type: 'Roasted',
  description: 'Roasted lemon Turkey',
  price:25,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/roasted-turkey.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Grilled Staick',
  food_type: 'Roasted',
  description: 'Long stack grill',
  price:25,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/roasted-meat.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
}]

const baked = [{
  name: 'Birthday Cake',
  food_type: 'Baked',
  description: 'White Cream Cake',
  price:7.45,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/white-cake.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Strawberry Cake',
  food_type: 'Baked',
  description: 'Strawberry Chocolate Cake',
  price:7.45,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/strawberry-cake.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Bread',
  food_type: 'Baked',
  description: 'baked baguette white bread',
  price:1.45,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/baked-breads.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Cookies',
  food_type: 'Baked',
  description: 'baked Buscuit coockies',
  price:0.50,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/cookies-biscuits.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Cupcakes',
  food_type: 'Baked',
  description: 'baked Cup caked',
  price:0.50,
  photoUrl:'https://github.com/RwadanDevs/Hoteria_BN/blob/master/server/uploads/cupcakes.png?raw=true',
  createdAt: new Date(),
  updatedAt: new Date(),
}]

export async function up(queryInterface) {
  return queryInterface.bulkInsert(
    'items',
    [
      ...baked,...fruites,...Drinks,...roasted,...TakeAway,...salads
    ],
    {},
  );
}
export function down(queryInterface) {
  return queryInterface.bulkDelete('items', null, {});
}
