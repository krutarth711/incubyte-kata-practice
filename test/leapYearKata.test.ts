import isLeapYear from "../src/leapYearKata";

it('Should return false for null or zero value', () => {
   expect(isLeapYear(0)).toBe(false);
});

it('Should return true for a year divisible by 400', () => {
   expect(isLeapYear(2000)).toBe(true);
});