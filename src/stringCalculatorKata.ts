const getDelimiterAndNumberString = (numberStr:string): [RegExp, string] => {
    let delimiter = /[\n,]/;
    if(numberStr.startsWith('//')) {
        const parts = numberStr.split('\n');
        delimiter = new RegExp(`[${parts[0].slice(2)}]`);
        numberStr = parts[1];
    }
    return [delimiter, numberStr];
}

const getNumbersArray = (numberStr: string, delimiter: RegExp): number[] => {
    return numberStr.split(delimiter).map(Number);
}

const getNegativeNumbers = (numbersArr: number[]): number[] => {
    return numbersArr.filter(a => a < 0)
}

const add = (numbers: string): number => {
    if (numbers.length === 0) return 0;

    let [delimiter, numberStr] = getDelimiterAndNumberString(numbers);

    const numbersArr: number[] = getNumbersArray(numberStr, delimiter);
    const negativeNumbers: number[] = getNegativeNumbers(numbersArr);

    if (negativeNumbers.length > 0) {
        throw new Error(`No negative numbers are allowed: ${negativeNumbers.join(', ')}`);
    }

    return addNumbers(numbersArr);
}

export default add;

function addNumbers(numbersArr: number[]): number {
    return numbersArr.reduce((total, acc) => total + acc, 0);
}
