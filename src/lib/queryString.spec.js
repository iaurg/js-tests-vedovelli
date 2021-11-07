const { queryString } = require('./queryString');

describe('object to queryString', () => {
  it('should create a valid query string from object passed', () => {
    const obj = {
      name: 'italo',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=italo&profession=developer');
  });

  it('should create a valid query string when an array is passed', () => {
    const obj = {
      name: 'iaurg',
      skills: ['JS', 'CSS'],
    };

    expect(queryString(obj)).toBe('name=iaurg&skills=JS,CSS');
  });

  it('should throw an error with deep nested objects', () => {
    const obj = {
      name: 'italo',
      skills: {
        web: 'JS',
        life: 'drive',
      },
    };
    console.log(queryString(obj));
    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});
