const assert = require('chai').assert;
// const sayHello = require('../index').sayHello;
// const addNumbers = require('../index').addNumbers;
const index = require('../index');

//RESULTS
sayHelloResult = index.sayHello();
addNumbersResult = index.addNumbers(5, 5);

describe('Index', function() {
  describe('sayHello()', function() {
    it('index should return hello', function() {
      // let result = index.sayHello();
      assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type string', function() {
      // let result = index.sayHello();
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  describe('addNumbers()', function() {
    it('addNumbers should be above 5', function() {
      // let result = index.addNumbers(5, 5);
      assert.isAbove(addNumbersResult, 5);
    });

    it('addNumbers should return type number', function() {
      // let result = index.addNumbers(5, 5);
      assert.typeOf(addNumbersResult, 'number');
    });
  });
});
