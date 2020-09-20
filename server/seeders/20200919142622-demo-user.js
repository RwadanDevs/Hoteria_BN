import dotenv from 'dotenv';

dotenv.config();

const { Derrick,Aline,Guest } = process.env;

export async function up(queryInterface) {
  return queryInterface.bulkInsert(
    'users',
    [
      {
        username:'Derrick',
        password: Derrick,
        role:'COOK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        username:'Aline',
        password: Aline,
        role:'MANAGER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        username:'GUEST',
        password: Guest,
        role:'GUEST',
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
