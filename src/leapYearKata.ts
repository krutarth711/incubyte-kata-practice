const isLeapYear = (year = -1): boolean => {
    return isDivisibleBy400(year) || (isDivisibleBy4(year) && !isDivisibleBy100(year));
}

const isDivisibleBy400 = (year: number): boolean => {
    return year % 400 === 0;
}

const isDivisibleBy100 = (year: number): boolean => {
    return year % 100 === 0;
}

const isDivisibleBy4 = (year: number): boolean => {
    return year % 4 === 0;
}
export default isLeapYear;