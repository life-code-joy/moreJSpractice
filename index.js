const funActivities = {
  relaxingSports: 'taichi',
  sports: {
    water: 'swimming',
    air: 'platform jumping',
    land: 'parkour',
    crazySports: 'ninja-skiing',
    supercrazySports: 'parkour-basketball',
  },
};
const popup = prompt('hi there');

funActivities['yetonemorefunactivity'] = 'gumFlying';
funActivities.onemorefunactivity = 'marshmelloJumping';
funActivities.onemorefunactivity = popup;
console.log(funActivities);

const nameKey = 'Sports';

console.log(funActivities['sports'][`crazy${nameKey}`]);
console.log(funActivities['sports'][`supercrazy${nameKey}`]);

// funActivities['new'];
// console.log(funActivities['sports']['land']);

const {
  sports,
  sports: { water },
  sports: { air },
  sports: { land },
} = funActivities;
console.log(sports, water, air, land);
