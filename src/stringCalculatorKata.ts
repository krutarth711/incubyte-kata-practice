const add = (numberStr: string): number => {
    if (numberStr.length === 0) return 0;
    return numberStr.split(',').map(Number).reduce((total, acc) => total + acc, 0);

}

export default add;