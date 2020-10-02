import dotenv from 'dotenv';

dotenv.config();

const { Derrick,Aline,Regis,Admin } = process.env;

export async function up(queryInterface) {
  return queryInterface.bulkInsert(
    'users',
    [
      {
        username:'derrick',
        password: Derrick,
        role:'COOK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        username:'aline',
        password: Aline,
        role:'BAR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        username:'regis',
        password: Regis,
        role:'WAITER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        username:'kalisa',
        password: Admin,
        role:'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  );
}
export function down(queryInterface) {
  return queryInterface.bulkDelete('users', null, {});
}
