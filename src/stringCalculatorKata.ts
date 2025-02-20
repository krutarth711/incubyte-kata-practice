const add = (numberStr: string): number => {
    if (numberStr.length === 0) return 0;

    const numberStrArr: number[] = numberStr.replace(/[\n]/g, ",").split(',').map(Number);

    return numberStrArr.reduce((total, acc) => total + acc, 0);
}

export default add;