const chai = require('chai');

const app = require('../app.js');

const expect = chai.expect;

const diffArray = app.diffArray;

describe('diffArray', () => {
  it('should return an array', () => {
    expect(diffArray()).to.be.an('array');
  });
  it('should return the symmetric difference of the two arrays', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [1, 2, 3, 5];
    const result = [4];
    expect(diffArray(arr1, arr2)).to.be.equal(result);
  });
});
