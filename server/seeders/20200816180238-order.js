import dotenv from 'dotenv';

dotenv.config();

export async function up(queryInterface) {
  return queryInterface.bulkInsert(
    'orders',
    [
      {
        items:'[1,2]',
        origin_type:'table',
        origin_id:10,
        total_cost:22000,
        timestamp: 1598263568127,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        items:'[1,2]',
        origin_type:'table',
        origin_id:12,
        total_cost:22000,
        timestamp: 1597263568127,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        items:'[2]',
        origin_type:'Room',
        origin_id:217,
        total_cost:20000,
        timestamp: 1597263568127,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        items:'[1,2]',
        origin_type:'table',
        origin_id:12,
        total_cost:22000,
        timestamp: 1599263568127,
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
