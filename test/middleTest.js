const assert = require('chai').assert;
const middle   = require('../middle');

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);



describe("#middle", () => {
  it("returns [] for ['1']", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns empty array for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), [ ]); 
  });
  it("returns [6] for [5, 6, 7]", () => {
    assert.deepEqual(middle([5, 6, 7]), [6]);
  });
  it("returns [2,3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
});
it("returns [3] for [1, 2, 3, 4, 5]", () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
});
it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
});

});