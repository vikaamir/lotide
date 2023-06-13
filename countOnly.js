const assertEqual = require('./assertEqual'); 
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  for (const item of allItems) { // loop for find if is a item that exist in allItems and itemsToCount
    if (itemsToCount[item]) { 
      if (results[item]) { // if item exist +1 
        results[item] += 1;
      } else {
        results[item] = 1; // else keep it 1
      }
    }console.log(item);
    
  }
return results;
};
countOnly();
module.exports = countOnly;