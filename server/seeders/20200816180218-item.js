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
  photoUrl:'https://e7.pngegg.com/pngimages/439/26/png-clipart-coca-cola-fizzy-drinks-hamburger-diet-coke-creative-coca-cola-carbonated-drinks-cola-pint-glass-thumbnail.png',
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
  photoUrl:'https://e7.pngegg.com/pngimages/843/516/png-clipart-orange-juice-grapefruit-juice-lemon-cartoon-painted-cream-ice-cream-drinks-juice-fruit-juice-watercolor-painting-cartoon-character-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Starwberry Juice',
  food_type: 'Drinks',
  description: 'Cold or RoomTemp',
  price:5,
  photoUrl:'https://e7.pngegg.com/pngimages/260/1018/png-clipart-strawberry-juice-cocktail-juice-fizzy-drinks-martini-punch-milkshake-strawberries-non-alcoholic-beverage-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Beer',
  food_type: 'Drinks',
  description: 'Cold or RoomTemp',
  price:1.50,
  photoUrl:'https://e7.pngegg.com/pngimages/876/134/png-clipart-beer-bottle-wine-fizzy-drinks-ale-beer-glass-wheat-beer-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'MilkShake',
  food_type: 'Drinks',
  description: 'RoomTemp',
  price:1.95,
  photoUrl:'https://e7.pngegg.com/pngimages/624/349/png-clipart-clear-drinking-glasses-and-assorted-fruits-milkshake-smoothie-juice-fruit-banana-smoothies-food-recipe-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},]

const salads = [{
  name: 'Salads Buffalo Wing',
  food_type: 'Salads',
  description: 'clipart caesar salad blackjack pizza salads buffalo wing olive oil leaf vegetable food',
  price:150,
  photoUrl:'https://e7.pngegg.com/pngimages/733/882/png-clipart-caesar-salad-blackjack-pizza-salads-buffalo-wing-olive-oil-leaf-vegetable-food-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Clipart Salad',
  food_type: 'Salads',
  description: 'lipart bar pasta egg greek vegetable salad in nowl leaf vegetable',
  price:150,
  photoUrl:'https://e7.pngegg.com/pngimages/716/980/png-clipart-salad-bar-pasta-salad-egg-salad-greek-salad-salad-vegetable-salad-in-nowl-leaf-vegetable-food-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Clipart Salad',
  food_type: 'Salads',
  description: 'clipart caesar chicken submarine sandwich fattoush lettuce caesar chicken salad',
  price:150,
  photoUrl:'https://e7.pngegg.com/pngimages/943/98/png-clipart-caesar-salad-chicken-salad-submarine-sandwich-fattoush-lettuce-salads-caesar-salad-chicken-salad-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Clipart Salad',
  food_type: 'Salads',
  description: 'clipart fast food health food recipe salad leaf vegetable',
  price:150,
  photoUrl:'https://e7.pngegg.com/pngimages/178/412/png-clipart-fast-food-health-food-recipe-salad-leaf-vegetable-food-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Clipart',
  food_type: 'Salads',
  description: 'fattoush european cuisine pizza fruit salad caesar leaf vegetable',
  price:10,
  photoUrl:'https://e7.pngegg.com/pngimages/232/910/png-clipart-fattoush-european-cuisine-pizza-fruit-salad-caesar-salad-salad-leaf-vegetable-food-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},]

const TakeAway = [{
  name: 'Pizza',
  food_type: 'TakeAway',
  description: 'Take Away',
  price:5,
  photoUrl:'https://e7.pngegg.com/pngimages/701/882/png-clipart-sliced-pizza-pizza-italian-cuisine-take-out-manakish-fast-food-pizza-food-recipe-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Baked bread',
  food_type: 'TakeAway',
  description: 'Room Temperature',
  price:7,
  photoUrl:'https://e7.pngegg.com/pngimages/231/1008/png-clipart-baked-bread-wrap-fajita-burrito-shawarma-hamburger-grilled-food-food-recipe-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Hamburger',
  food_type: 'TakeAway',
  description: 'Room Temperature',
  price:7,
  photoUrl:'https://e7.pngegg.com/pngimages/424/789/png-clipart-hamburger-junk-food-fast-food-hamburger-french-fries-pizza-junk-food-s-food-recipe-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},]

const fruites = [{
  name: 'Avocado',
  food_type: 'Fruits',
  description: 'Fruit',
  price:5,
  photoUrl:'https://e7.pngegg.com/pngimages/59/37/png-clipart-hass-avocado-mousse-food-fruit-ripening-aguacate-food-agriculture-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Starwberry',
  food_type: 'Fruits',
  description: 'Fruit',
  price:5,
  photoUrl:'https://e7.pngegg.com/pngimages/944/754/png-clipart-strawberry-fruits-juice-strawberry-frutti-di-bosco-fruit-apple-strawberry-natural-foods-frutti-di-bosco-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},]

const roasted = [{
  name: 'Beef',
  food_type: 'Roasted',
  description: 'Grilled Beef Bibs',
  price:4.69,
  photoUrl:'https://e7.pngegg.com/pngimages/727/249/png-clipart-grilled-beef-ribs-on-oval-white-ceramic-plate-with-fries-and-coleslaw-and-beans-dip-delray-beach-lucille-s-bad-to-the-bone-bbq-barbecue-grill-lucilles-bad-to-the-bone-bbq-barbeque-food-beef-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Pork',
  food_type: 'Roasted',
  description: '3 Pork barbecues',
  price:4.69,
  photoUrl:'https://e7.pngegg.com/pngimages/860/392/png-clipart-three-pork-barbecues-barbecue-shish-kebab-shashlik-skewer-vegetables-beef-kebabs-food-recipe-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'coln',
  food_type: 'Roasted',
  description: 'grilled com lobs',
  price:3.99,
  photoUrl:'https://e7.pngegg.com/pngimages/743/74/png-clipart-two-grilled-corn-cobs-corn-on-the-cob-barbecue-corn-chowder-cornbread-maize-flavor-roasted-corn-food-recipe-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Roasted Chicken',
  food_type: 'Roasted',
  description: 'Fruit',
  price:22.20,
  photoUrl:'https://e7.pngegg.com/pngimages/36/27/png-clipart-roasted-chicken-with-lemons-roast-chicken-barbecue-chicken-buffalo-wing-roast-goose-chicken-food-animals-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Roasted Turkey',
  food_type: 'Roasted',
  description: 'Fruit',
  price:25,
  photoUrl:'https://e7.pngegg.com/pngimages/582/139/png-clipart-roasted-turkey-on-vegetables-file-furnace-microwave-oven-nikai-pricena-a-thanksgiving-dinner-roast-chicken-food-animals-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Roasted Grill',
  food_type: 'Roasted',
  description: 'Fruit',
  price:25,
  photoUrl:'https://e7.pngegg.com/pngimages/144/202/png-clipart-plate-of-roasted-meat-potatoes-with-dip-and-parsley-leaves-barbecue-grill-beefsteak-beef-plate-grilling-grill-food-baking-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},]

const baked = [{
  name: 'Birthday Cake',
  food_type: 'Baked',
  description: 'White Cream Cake',
  price:7.45,
  photoUrl:'https://e7.pngegg.com/pngimages/558/581/png-clipart-one-sliced-white-happy-birthday-cake-illustration-birthday-cake-cake-in-cream-food-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Strawberry Cake',
  food_type: 'Baked',
  description: 'Strawberry Chocolate Cake',
  price:7.45,
  photoUrl:'https://e7.pngegg.com/pngimages/82/441/png-clipart-strawberry-fondant-cake-chocolate-cake-chocolate-truffle-tart-strawberry-chocolate-cake-cream-baked-goods-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Bread',
  food_type: 'Baked',
  description: 'baked baguette white bread',
  price:1.45,
  photoUrl:'https://e7.pngegg.com/pngimages/817/657/png-clipart-baked-breads-bakery-baguette-white-bread-baking-bread-baked-goods-food-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Cookies',
  food_type: 'Baked',
  description: 'baked Buscuit coockies',
  price:0.50,
  photoUrl:'https://e7.pngegg.com/pngimages/231/957/png-clipart-baked-cookies-biscuits-cookies-food-cookies-and-biscuits-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},{
  name: 'Cupcakes',
  food_type: 'Baked',
  description: 'baked Cup caked',
  price:0.50,
  photoUrl:'https://e1.pngegg.com/pngimages/2/13/png-clipart-cupcakes-20-s-baked-cupcake-thumbnail.png',
  createdAt: new Date(),
  updatedAt: new Date(),
},]

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
