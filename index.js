import { funAcivities2 } from './fun.js';
import {
  businessFundsJapan,
  businessFundsTaiwan,
  businessFundsBrazil,
} from './arrayStuff.js';
import { cond1 } from './moreStuff.js';
console.log(businessFundsJapan, businessFundsTaiwan, businessFundsBrazil);
console.log(funAcivities2);
funAcivities2.prettyFun('fred');

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
// const popup = prompt('hi there');

funActivities['yetonemorefunactivity'] = 'gumFlying';
funActivities.onemorefunactivity = 'marshmelloJumping';
// funActivities.onemorefunactivity = popup;
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

businessFundsJapan.push(99999);

console.log(businessFundsJapan.toString());

// businessFundsJapan.forEach((data) => console.log(`${data} oh yeah Japan!`));
// businessFundsTaiwan.forEach((data) => console.log(`${data} oh yeah Taiwan!`));
// businessFundsBrazil.forEach((data) => console.log(`${data} oh yeah! Brazil`));

const highestFunds = businessFundsJapan.filter((data) => {
  if (data > 0) {
    return `${data} These are the deposits`;
  }
});

console.log(highestFunds);

const newFundsTaiwan = [];

for (const mov of businessFundsTaiwan) {
  if (mov > 0) newFundsTaiwan.push(mov);
}

console.log(newFundsTaiwan);
