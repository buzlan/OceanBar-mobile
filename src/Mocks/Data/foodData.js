const foodData = {
  breakfast: [
    {
      id: 1,
      name: 'Тартар',
      prise: '120',
      weight: '500г',
      image:
        'https://www.edimdoma.ru/system/images/contents/0000/6787/wide/AdobeStock_275611083_%D0%B8%D1%81%D0%BF%D1%80.jpg?1564142039',
      ingredients: [
        'авокадо — 2 шт.',
        'зелень — для подачи',
        'лук-шалот — 1 головка',
        'оливковое масло — 1,5 ст. л',
        'лимон — 0,5 шт',
      ],
    },
    {
      id: 2,
      name: 'Тунец',
      prise: '150',
      weight: '400г',
      image:
        'https://www.edimdoma.ru/system/images/contents/0000/6788/wide/AdobeStock_166014726_result.jpeg?1564134468',
      ingredients: [
        'кунжут — 30 г',
        'белок — 1 шт',
        'соль, смесь перцев — по вкусу',
        'оливковое масло — 2 ст. л.',
      ],
    },
    {
      id: 3,
      name: 'Мидии',
      prise: '90',
      weight: '450г',
      image:
        'https://www.edimdoma.ru/system/images/contents/0000/6789/wide/AdobeStock_196463507_result.jpeg?1564134469',
      ingredients: [
        'петрушка — 2–3 веточки',
        'соус табаско — 2–3 капли',
        'чеснок — 2 зубчика',
        'лук-шалот — 1 головка',
        'мясистый томат — 2 шт.',
      ],
    },
    {
      id: 4,
      name: 'Креветки',
      prise: '130',
      weight: '500г',
      image:
        'https://www.edimdoma.ru/system/images/contents/0000/6790/wide/AdobeStock_240785620_result2.jpg?1564147840',
      ingredients: [
        'петрушка — 3–4 веточки',
        'белый лук — 1 головка',
        'виски (ром, коньяк) — 3 ст. л',
        'рисовая мука — 2 ч. л.',
        'сливки 33 % — 150 мл',
      ],
    },
    {
      id: 5,
      name: 'Магуро',
      prise: '90',
      weight: '400г',
      image:
        'https://e3.edimdoma.ru/data/posts/0002/2893/22893-ed4_wide.jpg?1631189838',
      ingredients: [
        'ракушки — 6–7 штук',
        'креветки - 100г',
        'коньяк — 2 ст. л',
        'соус— 1 ч. л.',
      ],
    },
  ],
  lunch: [
    {
      id: 1,
      name: 'Кальмар гриль',
      prise: '180',
      weight: '160г',
      image:
        'https://assets.misteram.com.ua/misteram-public/79dea0539d64fd08ab6299692121c845-400x0.png',
      ingredients: [
        'Филе-кальмара — 2 шт.',
        'рисом-сушидзу',
        'артишок — 1 головка',
        'оливковое масло — 1,5 ст. л',
        'лимон — 0,5 шт',
      ],
    },
    {
      id: 2,
      name: 'Лосось из печи',
      prise: '250',
      weight: '420г',
      image:
        'https://assets.misteram.com.ua/misteram-public/27c84bc86c4b8de16bcc03bc27075fae-400x0.png',
      ingredients: [
        'филе лосося',
        'огурец — по вкусу',
        'деревенская сметана — 2 ст. л.',
      ],
    },
    {
      id: 3,
      name: 'Сибас на гриле',
      prise: '190',
      weight: '350г',
      image:
        'https://assets.misteram.com.ua/misteram-public/2b0b1203adc13d42ed952214e49a26a8-400x0.png',
      ingredients: [
        'соусом из оливок',
        'каперсами–3 капли',
        'лук-шалот — 1 головка',
        'мясистый томат — 2 шт.',
      ],
    },
    {
      id: 4,
      name: 'Стейк из лосося',
      prise: '200',
      weight: '300г',
      image:
        'https://assets.misteram.com.ua/misteram-public/37c9708302888d9eeb327f2956ffc30a-400x0.png',
      ingredients: [
        'белый лук — 1 головка',
        'ром со вкусом дыма — 1 ст. л',
        'рисовая мука — 2 ч. л.',
        'сливки 33 % — 150 мл',
      ],
    },
    {
      id: 5,
      name: 'Креветки магаданские',
      prise: '190',
      weight: '300г',
      image:
        'https://assets.misteram.com.ua/misteram-public/92cf9d0b9c2e44be17ff21c5fb4690f3-400x0.png',
      ingredients: [
        'креветки - 100г',
        'соус красный — 2 ст. л',
        'соус— 1 ч. л.',
      ],
    },
  ],
  snacks: [
    {
      id: 1,
      name: 'ХАЦЕЛИМ',
      prise: '890',
      weight: '280г',
      image:
        'https://dellos-delivery.ru/upload/iblock/ba4/ba4b5d3cfc1858b895b37be225dfe381.jpg',
      ingredients: [
        'авокадо — 2 шт.',
        'зелень — для подачи',
        'лук-шалот — 1 головка',
        'оливковое масло — 1,5 ст. л',
        'лимон — 0,5 шт',
      ],
    },
    {
      id: 2,
      name: 'ЛАТКЕС ',
      prise: '250',
      weight: '100г',
      image:
        'https://dellos-delivery.ru/upload/iblock/9fe/9fea0c6aee578dfc50a033e7e547e644.jpg',
      ingredients: [
        'яблочно-клюквенным соусом — 30 г',
        'белок — 1 шт',
        'соль, смесь перцев — по вкусу',
        'оливковое масло — 2 ст. л.',
      ],
    },
    {
      id: 3,
      name: 'КАРТОШКА',
      prise: '120',
      weight: '410г',
      image:
        'https://dellos-delivery.ru/upload/iblock/e05/e053b9f5d3613211a48b8ddbec383753.jpg',
      ingredients: [
        'чеснок — 2шт',
        'соус табаско — 2–3 капли',
        'сметана -1 ложка',
        'лук-шалот — 1 головка',
        'мясистый томат — 2 шт.',
      ],
    },
    {
      id: 4,
      name: 'ХУМУС  ',
      prise: '220',
      weight: '150г',
      image:
        'https://dellos-delivery.ru/upload/iblock/4a2/4a2fcee4f30bd0c548c489384c3b2152.jpg',
      ingredients: [
        'жареным нутом — 3шт',
        'соус табаско — 2–3 капли',
        'сметана -1 ложка',
        'лук-шалот — 1 головка',
        'мясистый томат — 2 шт.',
      ],
    },
    {
      id: 5,
      name: 'БОРЩ',
      prise: '240',
      weight: '250г',
      image:
        'https://dellos-delivery.ru/upload/resize_cache/iblock/6db/1000_1000_0/6db539b51c19ae13921090e7040b8b81.jpg',
      ingredients: [
        'пампушки — 5шт',
        'белой фасоли — 3 шт',
        'сметана -1 ложка',
        'лук-шалот — 1 головка',
        'мясистый томат — 2 шт.',
      ],
    },
    {
      id: 6,
      name: 'ПИТА',
      prise: '120',
      weight: '350г',
      image:
        'https://dellos-delivery.ru/upload/iblock/348/3489a9bb9244d76581e65a1c532908b5.jpg',
      ingredients: [
        'тахийной пасты — 3ложки',
        'тмин 3 ложки',
        'лук-шалот — 1 головка',
        'мясистый томат — 2 шт.',
      ],
    },
    {
      id: 7,
      name: 'СТРОГАНОВ',
      prise: '320',
      weight: '550г',
      image:
        'https://dellos-delivery.ru/upload/resize_cache/iblock/d8f/1000_1000_0/d8f563ec6d2bee8bc778342e3de883ff.jpg',
      ingredients: [
        'корнишоны',
        'соус маринованный в меду — 2–3 капли',
        'болгарский перец',
        'лук-шалот — 1 головка',
        'мясистый томат — 2 шт.',
      ],
    },
    {
      id: 8,
      name: 'АРБУЗ',
      prise: '100',
      weight: '180г',
      image:
        'https://dellos-delivery.ru/upload/iblock/d1f/d1f7955bb09302a3f521670c22b1e5f1.jpg',
      ingredients: ['яйца', 'сыр', 'чедер', 'зёрна'],
    },
    {
      id: 9,
      name: 'ФОРШМАК',
      prise: '120',
      weight: '450г',
      image:
        'https://dellos-delivery.ru/upload/iblock/49f/49fe462229296ccb3d5dff45cd30ef10.jpg',
      ingredients: ['селёдка', 'яйца', 'сыр', 'чедер', 'зёрна', 'кардамона'],
    },
  ],
  salads: [
    {
      id: 1,
      name: 'Тартар',
      prise: '120',
      weight: '500г',
      image:
        'https://www.edimdoma.ru/system/images/contents/0000/6787/wide/AdobeStock_275611083_%D0%B8%D1%81%D0%BF%D1%80.jpg?1564142039',
      ingredients: [
        'авокадо — 2 шт.',
        'зелень — для подачи',
        'лук-шалот — 1 головка',
        'оливковое масло — 1,5 ст. л',
        'лимон — 0,5 шт',
      ],
    },
    {
      id: 2,
      name: 'Тунец',
      prise: '150',
      weight: '400г',
      image:
        'https://www.edimdoma.ru/system/images/contents/0000/6788/wide/AdobeStock_166014726_result.jpeg?1564134468',
      ingredients: [
        'кунжут — 30 г',
        'белок — 1 шт',
        'соль, смесь перцев — по вкусу',
        'оливковое масло — 2 ст. л.',
      ],
    },
    {
      id: 3,
      name: 'Мидии',
      prise: '90',
      weight: '450г',
      image:
        'https://www.edimdoma.ru/system/images/contents/0000/6789/wide/AdobeStock_196463507_result.jpeg?1564134469',
      ingredients: [
        'петрушка — 2–3 веточки',
        'соус табаско — 2–3 капли',
        'чеснок — 2 зубчика',
        'лук-шалот — 1 головка',
        'мясистый томат — 2 шт.',
      ],
    },
  ],
};

export default foodData;

// https://www.edimdoma.ru/jivem_doma/posts/22893-vysokaya-kuhnya-gotovim-blyuda-iz-ryby-i-moreproduktov
