const assertEqual = require('./assertEqual');
//1. slicing the head for an array and return the tail
const tail = function(arr){
 return arr.slice(1);
};


module.exports = tail;
