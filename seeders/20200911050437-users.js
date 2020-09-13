<<<<<<< HEAD
'use strict';
require("dotenv").config();
module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert('Users', [{
            name: 'John Doe',
            email: process.env.email,
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },
=======
"use strict";
require("dotenv").config();
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          email: process.env.email,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
>>>>>>> a0196fbe5c57b20885c3222bf4ac163cb0ebdcbc

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

<<<<<<< HEAD
        await queryInterface.bulkDelete('Users', null, {});
    }
};
=======
    await queryInterface.bulkDelete("Users", null, {});
  },
};
>>>>>>> a0196fbe5c57b20885c3222bf4ac163cb0ebdcbc
