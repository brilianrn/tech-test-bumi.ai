'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const axios = require('axios');

    try {
      const { data } = await axios({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'GET'
      });

      data.map(e => {
        e.createdAt = new Date();
        e.updatedAt = new Date();
      });

      await queryInterface.bulkInsert('Photos', data, {});
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Photos', null, {});
  }
};
