const { even_or_odd } = require('./index');
const expect = require('chai').expect;

describe('#evenOrOdd', () => {
  it('should return Even or Odd correctly', () => {
    expect(even_or_odd(2)).to.equal('Even');
    expect(even_or_odd(0)).to.equal('Even');
    expect(even_or_odd(7)).to.equal('Odd');
    expect(even_or_odd(1)).to.equal('Odd');
  });
});
