'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Campaigns', [
      {
        title: 'Wakaf Quran untuk Pelosok Indonesia, Amal Jariyah Bagi Kita',
        desc: `"Apabila manusia meninggal dunia maka terputuslah segala amalnya kecuali tiga: sedekah jariyah, ilmu yang bermanfaat, dan anak sholeh yang berdoa untuknya." (HR. Muslim) Ketidakmerataan pendidikan agama di Indonesia merupakan kesempatan bagi kita untuk berkontribusi dan meningkatkan amal jariyah. Saat ini, MyFundAction Indonesia sedang membuka kesempatan wakaf untuk saudara-saudara kita yang membutuhkan bantuan mushaf Al Quran di seluruh Indonesia.`,
        image: 'https://reliant-termination.000webhostapp.com/images/sedekah1.png',
        price_collect: 889899200,
        target_price_collect: 1000000000,
        institution_name: 'Ziswaf Indonesia',
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Zakat untuk Bantu Anak Yatim dan Dhuafa',
        desc: `"Apabila manusia meninggal dunia maka terputuslah segala amalnya kecuali tiga: sedekah jariyah, ilmu yang bermanfaat, dan anak sholeh yang berdoa untuknya." (HR. Muslim) Ketidakmerataan pendidikan agama di Indonesia merupakan kesempatan bagi kita untuk berkontribusi dan meningkatkan amal jariyah. Saat ini, MyFundAction Indonesia sedang membuka kesempatan wakaf untuk saudara-saudara kita yang membutuhkan bantuan mushaf Al Quran di seluruh Indonesia.`,
        image: 'https://reliant-termination.000webhostapp.com/images/sedekah5.png',
        price_collect: 689899200,
        target_price_collect: 1000000000,
        institution_name: 'Yayasan Baitul Yataama Fadlan',
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Campaigns', null, {});
  }
};
