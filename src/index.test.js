const sum = require('./index.js');

xtest('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

const multiply = require( "./index.js");

xdescribe("test multiply", () => {
    const result = multiply( 1, 0);
    expect(result).toBe(0);
}),
  xit("multuply 1 * 1 to equal 1", () => {
  const result = multiply ( 1, 1);
  expect(result).toBe(1);
  });

