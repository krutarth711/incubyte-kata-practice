const isLeapYear = (year?: number): boolean => {
    if (year === undefined) {
        throw new Error("Missing argument. Please provide a year.");
    }
    if (!Number.isInteger(year) || year < 0) {
        throw new Error("Invalid year. Please provide a non-negative integer.");
    }
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