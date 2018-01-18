const names = [
    'Объем нагреваемого воздуха при входе в рекуператор, м3/ч',
    'Объем дымовых газов при входе в рекуператор, м3/ч',
    'Температура подогрева воздуха у печи, °С',
    'Начальная температура воздуха, °С',
    'Температура дымовых газов, °С',
    'Падение температуры в воздухопроводе от рекуператора до печи, °С',
    'Потери тепла рекуператора в окружающее пространство, %',
    'Теплоемкость уходящих из рекуператора дымовых газов, кДж/(м3*°С)',
    'Длина труб, мм',
    'Сечение для прохода воздуха, м2',
    'Сечение для прохода дымовых газов, м2',
    'Условная поверхность нагреваб м2',
    'Труб по пути воздуха, шт.',
    'Труб по пути дымовых газов, шт.',
    'Количество ходов',
    'Эмпирический коэффициент для расчета теплоотдачи',
    'Эмпирический коэффициент для расчета теплоотдачи',
];

export default [
    {
        id: 'VSmoke',
        name: names[1],
        value: 1330,
        min: 100,
        max: 3000,
    },
    {
        id: 'VAir',
        name: names[0],
        value: 1340,
        min: 100,
        max: 3000,
    },
    {
        id: 'airHeat',
        name: names[2],
        value: 300,
        min: 20,
        max: 800,
    },
    {
        id: 'TAirStart',
        name: names[3],
        value: 20,
        min: -20,
        max: 250,
    },
    {
        id: 'TSmoke',
        name: names[4],
        value: 750,
        min: 350,
        max: 900,
    },
    {
        id: 'delT',
        name: names[5],
        value: 20,
        min: 0,
        max: 200,
    },
    {
        id: 'heatLoss',
        name: names[6],
        value: 10,
        min: 0,
        max: 99,
    },
    {
        id: 'CSmoke',
        name: names[7],
        value: 1.47,
        min: 1.42,
        max: 1.59,
    },
    {
        id: 'I',
        name: names[8],
        value: 880,
        min: 880,
        max: 1640,
    },
    {
        id: 'SAir',
        name: names[9],
        value: 0.008,
        min: 0.008,
        max: 0.008,
    },
    {
        id: 'SSmoke',
        name: names[10],
        value: 0.042,
        min: 0.042,
        max: 0.12,
    },
    {
        id: 'S',
        name: names[11],
        value: 0.25,
        min: 0.25,
        max: 0.5,
    },
    {
        id: 'NAir',
        name: names[12],
        value: 9,
        min: 4,
        max: 100,
    },
    {
        id: 'NSmoke',
        name: names[13],
        value: 3,
        min: 3,
        max: 50,
    },
    {
        id: 'channelsCount',
        name: names[14],
        value: 4,
        min: 1,
        max: 10,
    },
    {
        id: 'B',
        name: names[15],
        value: 17,
        min: 17,
        max: 41.2,
    },
    {
        id: 'n',
        name: names[16],
        value: 1.03,
        min: 0.72,
        max: 1.03,
    },
];
