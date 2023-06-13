const assertEqual = require('./assertEqual'); 
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
//1. lopp all items 
//2.check if the item exsict in the itemsToCount
//3. if is count if no keep the number
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]) { 
        results[item] += 1;
      } else {
        results[item] = 1; 
      }
    }console.log(item);
    
  }
return results;
};
countOnly();
module.exports = countOnly;