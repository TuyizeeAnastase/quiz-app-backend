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
    await queryInterface.bulkInsert("Questions", [
      {
        question: "Who is the father of C language?",
        options: [
          "Dennis Ritchie",
          "Steve Jobs",
          "James Gosling",
          "Rasmus Lerdorf",
        ],
        answer: "Dennis Ritchie",
        quiz_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Which of the following is not a valid C variable name",
        options: [
          "int number",
          "float rate",
          "int $main",
          "int variable_count",
        ],
        answer: "int $main",
        quiz_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Which is valid C expression?",
        options: [
          "int my_num = 100000",
          "int my_num = 100,000;",
          "int my num = 1000",
          "int $my_num = 10000",
        ],
        answer: "int my_num = 100000",
        quiz_id: 1,
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
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
