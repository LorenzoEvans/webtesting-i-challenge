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
};

describe('repair sets durability to 100.', () => {
 const { sword, armor } = mockItems ;
 it('Returns an item with durability restored to 100', () => {
  expect((repair(sword))).toBe(100)
  expect(sword.durability).not.toBeLessThan(100)
 })
})