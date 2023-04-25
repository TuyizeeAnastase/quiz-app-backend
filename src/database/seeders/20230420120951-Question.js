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
        quiz_id: 2,
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
        quiz_id: 2,
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
        quiz_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Having passed his exams he began to look for a job",
        options: [
          "Failed in",
          "Fought",
          "iProved",
          "taken",
        ],
        answer: "Taken",
        quiz_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Always avoid late night jobs",
        options: [
          "Pursue",
          "take",
          "Compel",
          "inspire",
        ],
        answer: "Pursue",
        quiz_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "The chairman initiated the proceedings with a brief speech",
        options: [
          "Complicated",
          "Started",
          "Confused",
          "Closed",
        ],
        answer: "closes",
        quiz_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Only an agile person can be a successful sportsman",
        options: [
          "Emaciated",
          "feeble;",
          "Sluggish",
          "Brisk",
        ],
        answer: "Sluggish",
        quiz_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Professors are generally serious about what they say",
        options: [
          "Insincere",
          "Smug",
          "Thoughtful",
          "Jolly",
        ],
        answer: "Insincere",
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
