const flatten = function(nested){
  //1.empty array fo loop and add the element 
  //2. loop the array and if has arry in array take out the array and creat new array
  //3. return thr new array flet 
  let flatten = []
  for(let i = 0 ; i <nested.length; i++){
    if(typeof nested[i] == "number" ){
      flatten.push(nested[i])

    } else {
      for( let y = 0; y < nested[i].length; y++){
        flatten.push(nested[i][y])
      }

    }

  } 
  return flatten
}
flatten()

module.exports = flatten;