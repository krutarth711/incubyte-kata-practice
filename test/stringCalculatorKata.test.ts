import add from '../src/stringCalculatorKata';

it('Should return 0 for empty string', () => {
    expect(add('')).toBe(0);
})

it('Should return the number for single number in the string', () => {
    expect(add('4')).toBe(4);
    expect(add('9')).toBe(9);
})

it('Should return the sum of 2 comma separated numbers ', () => {
    expect(add('1,4')).toBe(5);
    expect(add('3,9')).toBe(12);
})

it('Should return the sum of any number of comma separated numbers ', () => {
    expect(add('1,2,3,4')).toBe(10);
    expect(add('3,9,1')).toBe(13);
})

it('Should return the sum of 2 new line character separated numbers ', () => {
    expect(add('1\n2\n3\n4')).toBe(10);
    expect(add('3\n9\n1')).toBe(13);
})

it('Should return the sum of 2 numbers separated by custom delimiter ', () => {
    expect(add('//;\n1;2')).toBe(3);
    expect(add('//&\n4&5&1')).toBe(10);
})

it('Should an exception if there is any negative number', () => {
    expect(() => add('-1,2,4')).toThrow('No negative numbers are allowed: -1');
})

it('Should an exception with number if there are multiple negative numbers', () => {
    expect(() => add('-1,-2,4')).toThrow('No negative numbers are allowed: -1, -2');
})