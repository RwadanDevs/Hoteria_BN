export async function up(queryInterface) {
  return queryInterface.bulkInsert(
    'products',
    [
      {
        name:'Fanta',
        quantity:400,
        avatar:'RAE600B',
        type:'goods',
        price:50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name:'inkoko',
        quantity:10,
        avatar:'RAE800B',
        type:'goods',
        price:20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name:'ibirahure',
        quantity:30,
        price:73000,
        avatar:'RAE800B',
        type:'utilities',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  );
}
export function down(queryInterface) {
  return queryInterface.bulkDelete('products', null, {});
}
