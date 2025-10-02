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
      const existingImages = await sequelize.models.image.count();

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

      // Seed Images jika belum ada data
      if (existingImages === 0) {
        await this.seedImages();
        console.log('✅ Images data seeded successfully');
      } else {
        console.log('ℹ️  Images data already exists, skipping...');
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
        star_initial: 3,
        speed_aptitude: 'A',
        stamina_aptitude: 'B', 
        power_aptitude: 'A',
        guts_aptitude: 'B',
        wit_aptitude: 'A',
        turf_aptitude: 'A',
        dirt_aptitude: 'G',
        sprint_aptitude: 'G',
        mile_aptitude: 'A',
        medium_aptitude: 'A',
        long_aptitude: 'B',
        runner_aptitude: 'G',
        leader_aptitude: 'B',
        betweener_aptitude: 'A',
        chaser_aptitude: 'G'
      },
      {
        name: 'Silence Suzuka',
        star_initial: 3,
        speed_aptitude: 'A',
        stamina_aptitude: 'A',
        power_aptitude: 'C',
        guts_aptitude: 'C',
        wit_aptitude: 'A',
        turf_aptitude: 'A',
        dirt_aptitude: 'G',
        sprint_aptitude: 'A',
        mile_aptitude: 'A',
        medium_aptitude: 'A',
        long_aptitude: 'G',
        runner_aptitude: 'A',
        leader_aptitude: 'B',
        betweener_aptitude: 'G',
        chaser_aptitude: 'G'
      },
      {
        name: 'Tokai Teio',
        star_initial: 3,
        speed_aptitude: 'A',
        stamina_aptitude: 'A',
        power_aptitude: 'B',
        guts_aptitude: 'A',
        wit_aptitude: 'B',
        turf_aptitude: 'A',
        dirt_aptitude: 'E',
        sprint_aptitude: 'G',
        mile_aptitude: 'A',
        medium_aptitude: 'A',
        long_aptitude: 'A',
        runner_aptitude: 'G',
        leader_aptitude: 'A',
        betweener_aptitude: 'B',
        chaser_aptitude: 'G'
      },
      {
        name: 'Vodka',
        star_initial: 3,
        speed_aptitude: 'B',
        stamina_aptitude: 'A',
        power_aptitude: 'A',
        guts_aptitude: 'A',
        wit_aptitude: 'B',
        turf_aptitude: 'A',
        dirt_aptitude: 'F',
        sprint_aptitude: 'G',
        mile_aptitude: 'B',
        medium_aptitude: 'A',
        long_aptitude: 'A',
        runner_aptitude: 'G',
        leader_aptitude: 'G',
        betweener_aptitude: 'B',
        chaser_aptitude: 'A'
      },
      {
        name: 'Daiwa Scarlet',
        star_initial: 3,
        speed_aptitude: 'A',
        stamina_aptitude: 'B',
        power_aptitude: 'A',
        guts_aptitude: 'A',
        wit_aptitude: 'B',
        turf_aptitude: 'A',
        dirt_aptitude: 'D',
        sprint_aptitude: 'G',
        mile_aptitude: 'A',
        medium_aptitude: 'A',
        long_aptitude: 'G',
        runner_aptitude: 'G',
        leader_aptitude: 'A',
        betweener_aptitude: 'B',
        chaser_aptitude: 'G'
      }
    ];

    await sequelize.models.umas.bulkCreate(umasData);
  }

  static async seedSkills() {
    const skillsData = [
      {
        skill_name: 'Concentration',
        skill_effect: 'Improves starting time and early acceleration',
        skill_rarity: 'Normal',
        skill_type: 'Speed'
      },
      {
        skill_name: 'Pace Up',
        skill_effect: 'Slightly increases pace during the race',
        skill_rarity: 'Normal',
        skill_type: 'Speed'
      },
      {
        skill_name: 'Positioning',
        skill_effect: 'Better positioning during turns',
        skill_rarity: 'Normal',
        skill_type: 'Position'
      },
      {
        skill_name: 'Stamina Keeper',
        skill_effect: 'Maintains stamina for longer periods',
        skill_rarity: 'Rare',
        skill_type: 'Stamina'
      },
      {
        skill_name: 'Power Charge',
        skill_effect: 'Increases power in the final stretch',
        skill_rarity: 'Rare',
        skill_type: 'Power'
      },
      {
        skill_name: 'Mental Strength',
        skill_effect: 'Improves performance under pressure',
        skill_rarity: 'Normal',
        skill_type: 'Guts'
      },
      {
        skill_name: 'Quick Thinking',
        skill_effect: 'Faster decision making during race',
        skill_rarity: 'Normal',
        skill_type: 'Wit'
      },
      {
        skill_name: 'Full Throttle',
        skill_effect: 'Unique skill that maximizes speed potential',
        skill_rarity: 'Unique',
        skill_type: 'Speed'
      },
      {
        skill_name: 'Silent Storm',
        skill_effect: 'Unique acceleration skill for early race dominance',
        skill_rarity: 'Unique',
        skill_type: 'Acceleration'
      },
      {
        skill_name: 'Recovery',
        skill_effect: 'Faster stamina recovery during race',
        skill_rarity: 'Normal',
        skill_type: 'Recovery'
      }
    ];

    await sequelize.models.skills.bulkCreate(skillsData);
  }

  static async seedFactors() {
    const factorsData = [
      {
        factor_name: 'Speed Factor Blue',
        factor_type: 'Stat',
        color: 'Blue',
        star_rating: 1
      },
      {
        factor_name: 'Speed Factor Red',
        factor_type: 'Stat',
        color: 'Red',
        star_rating: 2
      },
      {
        factor_name: 'Speed Factor Rainbow',
        factor_type: 'Stat',
        color: 'Rainbow',
        star_rating: 3
      },
      {
        factor_name: 'Stamina Factor Blue',
        factor_type: 'Stat',
        color: 'Blue',
        star_rating: 1
      },
      {
        factor_name: 'Stamina Factor Red',
        factor_type: 'Stat',
        color: 'Red',
        star_rating: 2
      },
      {
        factor_name: 'Stamina Factor Rainbow',
        factor_type: 'Stat',
        color: 'Rainbow',
        star_rating: 3
      },
      {
        factor_name: 'Mile Distance Factor',
        factor_type: 'Distance',
        color: 'Green',
        star_rating: 2
      },
      {
        factor_name: 'Long Distance Factor',
        factor_type: 'Distance',
        color: 'Green',
        star_rating: 2
      },
      {
        factor_name: 'Turf Surface Factor',
        factor_type: 'Surface',
        color: 'White',
        star_rating: 1
      },
      {
        factor_name: 'Leader Strategy Factor',
        factor_type: 'Strategy',
        color: 'Blue',
        star_rating: 1
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

  static async seedImages() {
    // Seed gambar placeholder untuk semua entitas
    const imagesData = [
      // Images untuk Umas (id 1-5 sesuai dengan urutan uma di seedUmas)
      {
        url: 'uploads/umas/placeholder-special-week.jpg',
        imageable_id: 1,
        imageable_type: 'uma'
      },
      {
        url: 'uploads/umas/placeholder-silence-suzuka.jpg',
        imageable_id: 2,
        imageable_type: 'uma'
      },
      {
        url: 'uploads/umas/placeholder-tokai-teio.jpg',
        imageable_id: 3,
        imageable_type: 'uma'
      },
      {
        url: 'uploads/umas/placeholder-vodka.jpg',
        imageable_id: 4,
        imageable_type: 'uma'
      },
      {
        url: 'uploads/umas/placeholder-daiwa-scarlet.jpg',
        imageable_id: 5,
        imageable_type: 'uma'
      },

      // Images untuk Skills (id 1-10 sesuai dengan urutan skill di seedSkills)
      {
        url: 'uploads/skills/placeholder-concentration.png',
        imageable_id: 1,
        imageable_type: 'skill'
      },
      {
        url: 'uploads/skills/placeholder-pace-up.png',
        imageable_id: 2,
        imageable_type: 'skill'
      },
      {
        url: 'uploads/skills/placeholder-positioning.png',
        imageable_id: 3,
        imageable_type: 'skill'
      },
      {
        url: 'uploads/skills/placeholder-stamina-keeper.png',
        imageable_id: 4,
        imageable_type: 'skill'
      },
      {
        url: 'uploads/skills/placeholder-power-charge.png',
        imageable_id: 5,
        imageable_type: 'skill'
      },
      {
        url: 'uploads/skills/placeholder-mental-strength.png',
        imageable_id: 6,
        imageable_type: 'skill'
      },
      {
        url: 'uploads/skills/placeholder-quick-thinking.png',
        imageable_id: 7,
        imageable_type: 'skill'
      },
      {
        url: 'uploads/skills/placeholder-full-throttle.png',
        imageable_id: 8,
        imageable_type: 'skill'
      },
      {
        url: 'uploads/skills/placeholder-silent-storm.png',
        imageable_id: 9,
        imageable_type: 'skill'
      },
      {
        url: 'uploads/skills/placeholder-recovery.png',
        imageable_id: 10,
        imageable_type: 'skill'
      },

      // Images untuk Factors (id 1-10 sesuai dengan urutan factor di seedFactors)
      {
        url: 'uploads/factors/placeholder-speed-blue.png',
        imageable_id: 1,
        imageable_type: 'factor'
      },
      {
        url: 'uploads/factors/placeholder-speed-red.png',
        imageable_id: 2,
        imageable_type: 'factor'
      },
      {
        url: 'uploads/factors/placeholder-speed-rainbow.png',
        imageable_id: 3,
        imageable_type: 'factor'
      },
      {
        url: 'uploads/factors/placeholder-stamina-blue.png',
        imageable_id: 4,
        imageable_type: 'factor'
      },
      {
        url: 'uploads/factors/placeholder-stamina-red.png',
        imageable_id: 5,
        imageable_type: 'factor'
      },
      {
        url: 'uploads/factors/placeholder-stamina-rainbow.png',
        imageable_id: 6,
        imageable_type: 'factor'
      },
      {
        url: 'uploads/factors/placeholder-mile-distance.png',
        imageable_id: 7,
        imageable_type: 'factor'
      },
      {
        url: 'uploads/factors/placeholder-long-distance.png',
        imageable_id: 8,
        imageable_type: 'factor'
      },
      {
        url: 'uploads/factors/placeholder-turf-surface.png',
        imageable_id: 9,
        imageable_type: 'factor'
      },
      {
        url: 'uploads/factors/placeholder-leader-strategy.png',
        imageable_id: 10,
        imageable_type: 'factor'
      },

      // Images untuk Support Cards (id 1-12 sesuai dengan urutan support card di seedSupportCards)
      {
        url: 'uploads/support_cards/placeholder-special-week-ssr.jpg',
        imageable_id: 1,
        imageable_type: 'support_card'
      },
      {
        url: 'uploads/support_cards/placeholder-silence-suzuka-ssr.jpg',
        imageable_id: 2,
        imageable_type: 'support_card'
      },
      {
        url: 'uploads/support_cards/placeholder-tokai-teio-ssr.jpg',
        imageable_id: 3,
        imageable_type: 'support_card'
      },
      {
        url: 'uploads/support_cards/placeholder-vodka-sr.jpg',
        imageable_id: 4,
        imageable_type: 'support_card'
      },
      {
        url: 'uploads/support_cards/placeholder-daiwa-scarlet-ssr.jpg',
        imageable_id: 5,
        imageable_type: 'support_card'
      },
      {
        url: 'uploads/support_cards/placeholder-gold-ship-sr.jpg',
        imageable_id: 6,
        imageable_type: 'support_card'
      },
      {
        url: 'uploads/support_cards/placeholder-mejiro-mcqueen-ssr.jpg',
        imageable_id: 7,
        imageable_type: 'support_card'
      },
      {
        url: 'uploads/support_cards/placeholder-el-condor-pasa-ssr.jpg',
        imageable_id: 8,
        imageable_type: 'support_card'
      },
      {
        url: 'uploads/support_cards/placeholder-tm-opera-o-ssr.jpg',
        imageable_id: 9,
        imageable_type: 'support_card'
      },
      {
        url: 'uploads/support_cards/placeholder-narita-brian-sr.jpg',
        imageable_id: 10,
        imageable_type: 'support_card'
      },
      {
        url: 'uploads/support_cards/placeholder-miho-nosaka-r.jpg',
        imageable_id: 11,
        imageable_type: 'support_card'
      },
      {
        url: 'uploads/support_cards/placeholder-ryuji-wada-r.jpg',
        imageable_id: 12,
        imageable_type: 'support_card'
      }
    ];

    await sequelize.models.image.bulkCreate(imagesData);
  }

  // Method untuk reset/clear all data
  static async clearAll() {
    try {
      console.log('🧹 Clearing all seeded data...');
      
      await sequelize.models.image.destroy({ where: {} });
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