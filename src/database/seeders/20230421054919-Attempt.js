"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Attempts", [
      {
        user_id: 1,
        quiz_id: 1,
        score: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        quiz_id: 2,
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        quiz_id: 3,
        score: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        quiz_id: 2,
        score: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        quiz_id: 1,
        score: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Attemps", null, {});
  },
};
