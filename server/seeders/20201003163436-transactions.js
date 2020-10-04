export async function up(queryInterface) {
  return queryInterface.bulkInsert(
    'transactions',
    [
      {
        author_id:4,
        author_name:'Kalisa',
        details:'Add Product',
        product_id:1,
        product_name:'Fanta',
        quantity:200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        author_id:2,
        author_name:'Aline',
        details:'Reduce Product',
        product_id:1,
        product_name:'Fanta',
        quantity:100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        author_id:3,
        author_name:'Derrick',
        details:'Return Product',
        product_id:2,
        product_name:'inkoko',
        quantity:10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        author_id:2,
        author_name:'Aline',
        details:'Create Product',
        product_id:1,
        product_name:'Fanta',
        quantity:100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );
}
export function down(queryInterface) {
  return queryInterface.bulkDelete('transactions', null, {});
}
