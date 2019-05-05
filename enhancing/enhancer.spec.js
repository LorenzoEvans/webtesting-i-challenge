const {succeed, fail, repair, get} = require('./enhancer.js');
// test away!

const mockItems = {
 sword: {
  name: "Masamune",
  durability: 87,
  enhancement: 17,
 },
 armor: {
  name: "Naraku",
  durability: 65,
  enhancement: 5,
 },
 shield: {
  name: "Guildsman",
  durability: 54,
  enhancement: 17,
 }
};
const { sword, armor, shield } = mockItems ;


describe('repair sets durability to 100.', () => {
 it('Returns an item with durability restored to 100', () => {
  expect((repair(sword))).toBe(100); //assertion
  expect(sword.durability).not.toBeLessThan(100);
 });
});

describe('succeed increases enhancements up to 20.', () => {
 it('Returns an item with an enhancement increased by one.', () => {
  const { enhancement } = armor ;
  expect(succeed(armor)).toBe(enhancement + 1);
  expect(succeed(armor)).toBeGreaterThan(enhancement);
 })
})

describe('fail alters enhancement or durability accordingly.', () => {
 const { enhancement, durability } = shield ;
 const enhancementArmor = armor.enhancement ;
it('Alters item properties according to client specs.', () => { 
 expect(fail(shield)).toBe(enhancement - 1)
})
})

