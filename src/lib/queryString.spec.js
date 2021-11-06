const { queryString } = require('./queryString');

describe('object to queryString', () => {
  it('should create a valid query string from object passed', () => {
    const obj = {
      name: 'italo',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=italo&profession=developer');
  });
});
