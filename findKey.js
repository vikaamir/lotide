const assertEqual = require('./assertEqual');
//1.kindkey function 2 parameters object and callback
//2. loop to find the key in the object 
//3. if the key of the callback mach with the object

const findKey = function(object, callback){
  for (key in object){
    if(callback(object[key])){
      return key
    }
  }
  return undefined
};

findKey()

module.exports = findKey;