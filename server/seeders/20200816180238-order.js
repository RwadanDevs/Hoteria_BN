import dotenv from 'dotenv';

dotenv.config();

export async function up(queryInterface) {
  return queryInterface.bulkInsert(
    'orders',
    [
      {
        item:5,
        itemCount:8,
        creator_id:3,
        total_cost:1500,
        creator_name:'regis',
        owner:'Table 2',
        status:'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        item:1,
        itemCount:5,
        total_cost:2050,
        status:'delivered',
        creator_id:1,
        creator_name:'derrick',
        owner:'Table 7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        item:2,
        itemCount:3,
        total_cost:4500,
        status:'delivered',
        creator_id:2,
        creator_name:'aline',
        owner:'Table 10',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        item:20,
        itemCount:10,
        creator_id:3,
        total_cost:7090,
        creator_name:'regis',
        owner:'Table 5',
        status:'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  );
}
export function down(queryInterface) {
  return queryInterface.bulkDelete('orders', null, {});
}
