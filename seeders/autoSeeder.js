'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Menambahkan data ke tabel 'umas'
    await queryInterface.bulkInsert('umas', [
      { name: 'Special Week', turf_aptitude: 'A', dirt_aptitude: 'G' },
      { name: 'Silence Suzuka', turf_aptitude: 'A', dirt_aptitude: 'G' },
      { name: 'Tokai Teio', turf_aptitude: 'A', dirt_aptitude: 'E' },
    ], {});

    // Menambahkan data ke tabel 'skills'
    await queryInterface.bulkInsert('skills', [
      { skill_name: 'Concentration', skill_effect: 'Improves starting time.' },
      { skill_name: 'Pace Up', skill_effect: 'Slightly increases pace.' },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Perintah untuk mengembalikan (menghapus) data jika seeder di-undo
    await queryInterface.bulkDelete('skills', null, {});
    await queryInterface.bulkDelete('umas', null, {});
  }
};