const isLeapYear = (year = 0): boolean => {
    if (!year || (year % 100 === 0 && year % 400 !== 0) || year % 4 !== 0) {
        return false;
    }
    return true;
}

export default isLeapYear;