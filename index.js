// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey')
const eqObjects = require ('./eqObjects')
const countOnly = require('./countOnly')
const countLetters = require('./countLetters')
const takeUntil = require('./takeUntil')
const map = require('./map')
const letterPositions =require('./letterPositions')
const without = require('./without')
const assertArraysEqual = require('./assertArraysEqual')
const assertEqual = require('./assertEqual')
const assertObjectsEqual = require('./assertObjectsEqual')


module.exports = {
  head,
  tail,
  middle,
  flatten,
  findKeyByValue,
  findKey,
  eqObjects,
  countOnly,
  countLetters,
  takeUntil,
  map,
  letterPositions,
  without,
  assertEqual,
  assertObjectsEqual,
  assertArraysEqual
};