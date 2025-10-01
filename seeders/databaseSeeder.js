'use strict';

const { sequelize } = require('../models');

class DatabaseSeeder {
  static async seedAll() {
    try {
      console.log('🌱 Starting database seeding...');
      
      // Cek apakah data sudah ada untuk menghindari duplikasi
      const existingUmas = await sequelize.models.umas.count();
      const existingSkills = await sequelize.models.skills.count();
      const existingFactors = await sequelize.models.factors.count();
      const existingSupportCards = await sequelize.models.support_cards.count();

      // Seed Umas jika belum ada data
      if (existingUmas === 0) {
        await this.seedUmas();
        console.log('✅ Umas data seeded successfully');
      } else {
        console.log('ℹ️  Umas data already exists, skipping...');
      }

      // Seed Skills jika belum ada data
      if (existingSkills === 0) {
        await this.seedSkills();
        console.log('✅ Skills data seeded successfully');
      } else {
        console.log('ℹ️  Skills data already exists, skipping...');
      }

      // Seed Factors jika belum ada data
      if (existingFactors === 0) {
        await this.seedFactors();
        console.log('✅ Factors data seeded successfully');
      } else {
        console.log('ℹ️  Factors data already exists, skipping...');
      }

      // Seed Support Cards jika belum ada data
      if (existingSupportCards === 0) {
        await this.seedSupportCards();
        console.log('✅ Support Cards data seeded successfully');
      } else {
        console.log('ℹ️  Support Cards data already exists, skipping...');
      }

      console.log('🎉 Database seeding completed!');
      return true;
    } catch (error) {
      console.error('❌ Error during seeding:', error);
      return false;
    }
  }

  static async seedUmas() {
    const umasData = [
      {
        name: 'Special Week',
        turf_aptitude: 'A',
        dirt_aptitude: 'G'
      },
      {
        name: 'Silence Suzuka',
        turf_aptitude: 'A',
        dirt_aptitude: 'G'
      },
      {
        name: 'Tokai Teio',
        turf_aptitude: 'A',
        dirt_aptitude: 'E'
      },
      {
        name: 'Vodka',
        turf_aptitude: 'A',
        dirt_aptitude: 'F'
      },
      {
        name: 'Daiwa Scarlet',
        turf_aptitude: 'A',
        dirt_aptitude: 'D'
      },
      {
        name: 'Gold Ship',
        turf_aptitude: 'A',
        dirt_aptitude: 'G'
      },
      {
        name: 'Mejiro McQueen',
        turf_aptitude: 'A',
        dirt_aptitude: 'G'
      },
      {
        name: 'El Condor Pasa',
        turf_aptitude: 'A',
        dirt_aptitude: 'A'
      },
      {
        name: 'T.M. Opera O',
        turf_aptitude: 'A',
        dirt_aptitude: 'A'
      },
      {
        name: 'Narita Brian',
        turf_aptitude: 'A',
        dirt_aptitude: 'F'
      }
    ];

    await sequelize.models.umas.bulkCreate(umasData);
  }

  static async seedSkills() {
    const skillsData = [
      {
        skill_name: 'Concentration',
        skill_type: 'Speed',
        description: 'Improves starting time and early acceleration'
      },
      {
        skill_name: 'Pace Up',
        skill_type: 'Speed',
        description: 'Slightly increases pace during the race'
      },
      {
        skill_name: 'Positioning',
        skill_type: 'Strategy',
        description: 'Better positioning during turns'
      },
      {
        skill_name: 'Stamina Keeper',
        skill_type: 'Stamina',
        description: 'Maintains stamina for longer periods'
      },
      {
        skill_name: 'Power Charge',
        skill_type: 'Power',
        description: 'Increases power in the final stretch'
      },
      {
        skill_name: 'Mental Strength',
        skill_type: 'Guts',
        description: 'Improves performance under pressure'
      },
      {
        skill_name: 'Quick Thinking',
        skill_type: 'Wit',
        description: 'Faster decision making during race'
      },
      {
        skill_name: 'Cornering',
        skill_type: 'Strategy',
        description: 'Better performance on turns'
      },
      {
        skill_name: 'Final Spurt',
        skill_type: 'Speed',
        description: 'Extra burst of speed in final stretch'
      },
      {
        skill_name: 'Recovery',
        skill_type: 'Stamina',
        description: 'Faster stamina recovery'
      }
    ];

    await sequelize.models.skills.bulkCreate(skillsData);
  }

  static async seedFactors() {
    const factorsData = [
      {
        factor_name: 'Speed Factor Blue',
        stars: 1,
        factor_type: 'Speed'
      },
      {
        factor_name: 'Speed Factor Red',
        stars: 2,
        factor_type: 'Speed'
      },
      {
        factor_name: 'Speed Factor Rainbow',
        stars: 3,
        factor_type: 'Speed'
      },
      {
        factor_name: 'Stamina Factor Blue',
        stars: 1,
        factor_type: 'Stamina'
      },
      {
        factor_name: 'Stamina Factor Red',
        stars: 2,
        factor_type: 'Stamina'
      },
      {
        factor_name: 'Stamina Factor Rainbow',
        stars: 3,
        factor_type: 'Stamina'
      },
      {
        factor_name: 'Power Factor Blue',
        stars: 1,
        factor_type: 'Power'
      },
      {
        factor_name: 'Power Factor Red',
        stars: 2,
        factor_type: 'Power'
      },
      {
        factor_name: 'Power Factor Rainbow',
        stars: 3,
        factor_type: 'Power'
      },
      {
        factor_name: 'Guts Factor Blue',
        stars: 1,
        factor_type: 'Guts'
      },
      {
        factor_name: 'Guts Factor Red',
        stars: 2,
        factor_type: 'Guts'
      },
      {
        factor_name: 'Guts Factor Rainbow',
        stars: 3,
        factor_type: 'Guts'
      },
      {
        factor_name: 'Wit Factor Blue',
        stars: 1,
        factor_type: 'Wit'
      },
      {
        factor_name: 'Wit Factor Red',
        stars: 2,
        factor_type: 'Wit'
      },
      {
        factor_name: 'Wit Factor Rainbow',
        stars: 3,
        factor_type: 'Wit'
      }
    ];

    await sequelize.models.factors.bulkCreate(factorsData);
  }

  static async seedSupportCards() {
    const supportCardsData = [
      {
        card_name: '[Chasing the Star] Special Week',
        rarity: 'SSR',
        card_type: 'Speed'
      },
      {
        card_name: '[Preparing for Victory] Silence Suzuka',
        rarity: 'SSR',
        card_type: 'Speed'
      },
      {
        card_name: '[Road to the Top] Tokai Teio',
        rarity: 'SSR',
        card_type: 'Stamina'
      },
      {
        card_name: '[Elite Course] Vodka',
        rarity: 'SR',
        card_type: 'Power'
      },
      {
        card_name: '[Crimson Warrior] Daiwa Scarlet',
        rarity: 'SSR',
        card_type: 'Speed'
      },
      {
        card_name: '[Golden Journey] Gold Ship',
        rarity: 'SR',
        card_type: 'Wit'
      },
      {
        card_name: '[Noble Bloodline] Mejiro McQueen',
        rarity: 'SSR',
        card_type: 'Stamina'
      },
      {
        card_name: '[Flying Condor] El Condor Pasa',
        rarity: 'SSR',
        card_type: 'Power'
      },
      {
        card_name: '[Opera of Victory] T.M. Opera O',
        rarity: 'SSR',
        card_type: 'Speed'
      },
      {
        card_name: '[Storm Chaser] Narita Brian',
        rarity: 'SR',
        card_type: 'Guts'
      },
      {
        card_name: '[Training Partner] Miho Nosaka',
        rarity: 'R',
        card_type: 'Friend'
      },
      {
        card_name: '[Veteran Trainer] Ryuji Wada',
        rarity: 'R',
        card_type: 'Friend'
      }
    ];

    await sequelize.models.support_cards.bulkCreate(supportCardsData);
  }

  // Method untuk reset/clear all data
  static async clearAll() {
    try {
      console.log('🧹 Clearing all seeded data...');
      
      await sequelize.models.support_cards.destroy({ where: {} });
      await sequelize.models.factors.destroy({ where: {} });
      await sequelize.models.skills.destroy({ where: {} });
      await sequelize.models.umas.destroy({ where: {} });
      
      console.log('✅ All data cleared successfully');
      return true;
    } catch (error) {
      console.error('❌ Error clearing data:', error);
      return false;
    }
  }
}

module.exports = DatabaseSeeder;