import isLeapYear from "../src/leapYearKata";

it('Should return false for null or zero value', () => {
   expect(isLeapYear(0)).toBe(false);
});

it('Should return true for a year divisible by 400', () => {
   expect(isLeapYear(2000)).toBe(true);
});

it('Should return false for a year divisible by 100 but not by 400', () => {
   expect(isLeapYear(1900)).toBe(false);
   expect(isLeapYear(1800)).toBe(false);
});

it('Should return true for a year divisible by 4 but not by 100', () => {
   expect(isLeapYear(2004)).toBe(true);
   expect(isLeapYear(2008)).toBe(true);
});

it('Should return false for a year not divisible by 4', () => {
   expect(isLeapYear(2017)).toBe(false);
   expect(isLeapYear(2009)).toBe(false);
});