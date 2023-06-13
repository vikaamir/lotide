# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vikamir/lotide`

**Require it:**

`const _ = require('@vikamir/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`
Description:function for asserting that two arrays are equal and console.log an appropriate message to the console.
parameters:
arr1(array)
arr2(array)

* `assertEqual(actual, expected)`
Description: function compare the two values it takes in and print out a message telling us if they match or not
parameters;
actual: the given value what do we think the answer
expected: whar should be the value

* `assertObjectsEqual(Object1, Object2)`
Description:function for asserting that two obtects are equal and console.log an appropriate message to the console.
parameters:
object1 object that compered to the other object
object 2

* `countLetters(words)`
Description:function should take in a sentence (as a string) and then return a count of each of the letters in that sentence
parenetes:
words: text(string)

* `countOnly(allItems, itemsToCount)`
Description: Counts the occurrences of specific items in an array based on a provided criteria.
Parameters:
allItems (Array): The array of items to be counted.
itemsToCount (Object): The object specifying the items to count and their criteria.
Returns: An object containing the counts of the specified items.

* `eqArrays(arr1, arr2)`
Description :functions that takes in two arrays and returns true or false, based on a perfect match
Parameters:
arr1(array):
arr2(array):


* `eqObjects(object1, object2)`
Description :functions that takes in two objects and returns true or false, based on a perfect match
parameters:
object1 object that compered to the other object
object 2

* `findKey(object, callback)`
Description:takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value
parameters:
object list of elements 
callback function that returning true for the key

* `indKeyByValuel(obj, value)`
Description:search for a key on an object where its value matches a given value
parameters:
obj: object with list of keys and valuse
value: the item that should be found

* `flatten(nested)`
Description:function that takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
parameters:
nested: arrays with elements and iner arrays

* `head(arr)`
Description:function for arrays is to retrieve the first element from the array.
Parameters:
arr(array): value 

* `tail(words)`
Description:function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.
parameter:
words(array); value 


* `letterPositions(sentence)`
Description:return all the indices (zero-based positions) in the string where each character is found
parameters:
sentens (string) a text 

`map(array, callback)`
Description:creates a new array populated with the results of calling a provided function
parameters:
array an array to map
callback a callback function

`middle(array)`
Description:function that takes in an array and return the middle-most element(s) of the given arrayy
parametes;
array array with elements 

`takeUntil(array, callback)`
Description:slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
array The array to work with
callback a callback function

`without(source, itemsToRemove)`
Description:function that returns a new array subset of a given array, removing unwanted elements
parameters:
source: arrays with list of elements
itemsToRemove; array with a elements that need be removed from the source 
