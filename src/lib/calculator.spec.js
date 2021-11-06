const {sum} = require('./calculator')

it('should sum 2 and 2 and return 4', () => {
  expect(sum(2, 2)).toBe(4);
});

it('should sum 2 and 2 even when its passed as string', () => {
  expect(sum('2', '2')).toBe(4);
});

it('should throw an error if a param is empty or wrong', () => {
  expect(() => {
    sum(2, '')
  }).toThrowError();
  
  expect(() => {
    sum([2, ''])
  }).toThrowError();
  
  expect(() => {
    sum({})
  }).toThrowError();
  
  expect(() => {
    sum()
  }).toThrowError();
})