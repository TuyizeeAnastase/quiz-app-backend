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
    await queryInterface.bulkInsert("Quizzes", [
      {
        title: "English",
        description: "instructions ...",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "computer",
        description: "instructions ...",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Math",
        description: "instructions ...",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Data structures",
        description: "instructions ...",
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
    await queryInterface.bulkDelete("Quizzes", null, {});
  },
};
