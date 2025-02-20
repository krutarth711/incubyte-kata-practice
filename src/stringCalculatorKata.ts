const add = (numberStr: string): number => {
    if (numberStr.length === 0) return 0;

    let delimiter = /[\n,]/;

    if(numberStr.startsWith('//')) {
        const parts = numberStr.split('\n');
        delimiter = new RegExp(`[${parts[0].slice(2)}]`);
        numberStr = parts[1];
    }

    const numbersArr: number[] = numberStr.split(delimiter).map(Number);
    const negativeNumbers: number[] = numbersArr.filter(a => a < 0);

    if (negativeNumbers.length > 0) {
        throw new Error(`No negative numbers are allowed: ${negativeNumbers.join(', ')}`);
    }

    return numbersArr.reduce((total, acc) => total + acc, 0);
}

export default add;