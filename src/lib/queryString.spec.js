import { queryString, parse } from './queryString';

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
    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should parse query string to object', () => {
    const qs = 'name=italo&skill=JS';

    expect(parse(qs)).toEqual({
      name: 'italo',
      skill: 'JS',
    });
  });

  it('should parse 1 key-value pair', () => {
    const qs = 'name=italo';

    expect(parse(qs)).toEqual({
      name: 'italo',
    });
  });

  it('should parse query string with multiple values', () => {
    const qs = 'name=italo&skills=CSS,JS';

    expect(parse(qs)).toEqual({
      name: 'italo',
      skills: ['CSS', 'JS'],
    });
  });
});
