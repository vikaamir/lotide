const assertEqual = require('../assertEqual');
const tail = require('../tail');


const words0 =["Hello", "Lighthouse", "Labs"];
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words0), ["Lighthouse", "Labs"]);
assertEqual((words).length, 3);
