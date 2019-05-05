module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
 while(typeof item === 'object'){
  if(item.enhancement < 20){
  return item.enhancement + 1 ;
 }
}
  return { ...item };
}

function fail(item) {
 while(typeof item === 'object'){
  if (item.enhancement < 15){
   return item.durability - 5 ;

  }
  else if (15 < item.enhancement > 17){
   return item.durability - 10 ; ;
  }
  else if (item.enhancement > 16){
   return item.enhancement - 1 ;
  }
 }
  return { ...item };
}

function repair(item) {
 while(typeof item === 'object'){
  if (item.durability !== 100){
   return item.durability = 100
  }
 }
  return { ...item };
}

function get(item) {
  return { ...item };
}
