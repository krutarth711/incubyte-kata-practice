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
    console.log(add('1\n2\n3\n4'));
    expect(add('1\n2\n3\n4')).toBe(10);
    expect(add('3\n9\n1')).toBe(13);
})