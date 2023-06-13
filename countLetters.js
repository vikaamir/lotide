const assertEqual = require('./assertEqual'); 
const countLetters = function(words){
  const  result1 ={}
  for(letters of words){// loop the words
    if (letters !== " ") { // avoid empty spaces 
      if (result1[letters]) { 
        result1[letters] += 1; // if is a letter +1
      } else {
        result1[letters] = 1; // else keep it 1
      }
    }
  }
  return result1
};
module.exports = countLetters;
countLetters();
