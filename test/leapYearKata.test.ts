import isLeapYear from "../src/leapYearKata";

it('Should return false for null or zero value', () => {
   expect(isLeapYear(0)).toBe(false);
});