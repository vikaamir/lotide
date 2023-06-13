const without = function(source, itemsToRemove){
  let newArray = source.slice();

  for (let i = 0; i < itemsToRemove.length; i++){
    const index = newArray.indexOf(itemsToRemove[i]);
    if (index > -1) { // only splice array when item is found
      newArray.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
  return newArray
}
without()
module.exports = without;

