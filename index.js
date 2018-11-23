// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield" ];

function destructivelyAppendDriver(name){
  drivers.push(name);
  return drivers;
  }
  
function destructivelyPrependDriver(name){
  drivers.unshift(name);
  return drivers;
}

function destructivelyRemoveLastDriver(){
  drivers.pop(name);
  return drivers;
}

function destructivelyRemoveFirstDriver(){
  drivers.shift(name);
  return drivers;
}

 function appendDriver(name){
   return [...drivers, name]
 }
 
 function prependDriver(name){
   return [name, ...drivers]
 }

function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length -1)
  return newKittens
}
 function removeFirstKitten() {
  var newKittens = kittens.slice(1)
  return newKittens
}