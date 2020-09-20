import dotenv from 'dotenv';

dotenv.config();

export async function up(queryInterface) {
  return queryInterface.bulkInsert(
    'orders',
    [
      {
        items:'[1,2]',
        origin_type:'Table',
        origin_id:10,
        total_cost:22000,
        status:'pending',
        timestamp: 1598263568127,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        items:'[1,2]',
        origin_type:'Table',
        origin_id:12,
        total_cost:22000,
        timestamp: 1599213568127,
        status:'delivered',
        server:'Derrick',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        items:'[2]',
        origin_type:'Room',
        origin_id:217,
        total_cost:20000,
        status:'delivered',
        server:'Aline',
        timestamp: 1597263568127,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        items:'[1,2]',
        origin_type:'Table',
        origin_id:12,
        total_cost:22000,
        timestamp: 1599263568127,
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
