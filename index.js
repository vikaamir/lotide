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


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  flatten: flatten,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  eqObjects: eqObjects,
  countOnly: countOnly,
  countLetters: countLetters,
  takeUntil: takeUntil,
  map: map,
  letterPositions: letterPositions,
  without: without

};