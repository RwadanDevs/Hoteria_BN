import dotenv from 'dotenv';

dotenv.config();

export async function up(queryInterface) {
  return queryInterface.bulkInsert(
    'comments',
    [
      {
        item_id: 2,
        content: '👏 nice meal',
        rate:4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id:1,
        content:'refreshing 👌',
        rate:5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );
}
export function down(queryInterface) {
  return queryInterface.bulkDelete('comments', null, {});
}
