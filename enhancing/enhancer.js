module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
 if(item.enhancement < 20){
  item.enhancement += 1;
  return item ;
 }
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if (item.durability !== 100){
   return item.durability = 100
  }
  return { ...item };
}

function get(item) {
  return { ...item };
}
