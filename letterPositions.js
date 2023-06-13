const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {}; // 1.create empty object
  for (let i = 0; i < sentence.length; i++) {//2. for loop through array
    let letter = sentence[i];//3.curent letter
    if (letter !== " ") {//4. skiping the white space
      if (results[letter]) {//5.if letter alredy in the object
        results[letter].push(i);//6.push the index in to array
      } else { //7. if letter is not in the object
        results[letter] = [i];//8. creat an array with the index in it
      }
    }
  }
  return results;
};

letterPositions()
module.exports = letterPositions;
