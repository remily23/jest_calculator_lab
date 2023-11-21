const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => {
    expected = 1000
    actual = sum(600, 400);
    expect(actual).toBe(expected); 
    
  });

  test('can add two negative numbers', () => {
    expected = -50
    actual = sum(-40, -10);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 100;
    actual = sum(0, 100);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
