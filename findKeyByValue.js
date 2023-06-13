const assertEqual = require('./assertEqual');
const findKeyByValue =function(obj, value){
  //1.forin loop to give the key
  //2.if to check if (obj[key=value])
  for(const key in obj){
    if(obj[key] === value){
      return key;
    }

  } 
  return undefined
}
findKeyByValue()
module.exports = findKeyByValue;
