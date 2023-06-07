const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual }] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }

};
const countLetters = function(words){
  const  result1 ={}
  for(letters of words){
    if (letters !== " ") { 
      if (result1[letters]) {
        result1[letters] += 1;
      } else {
        result1[letters] = 1;
      }
    }
  }
  return result1
} 
console.log(countLetters("lighthouse in the house"));
let testSen = countLetters("lighthouse in the house")

assertEqual(testSen["h"], 4);
assertEqual(testSen["e"], 3);
assertEqual(testSen["u"], 2);
assertEqual(testSen["t"], 2);

module.exports = countLetters;
