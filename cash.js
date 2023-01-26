const factorial = (n) => {
    if(n === 1) {
        return n
    }
    return n * factorial(n - 1)
}

const cashFunction = (fn) => {
    const cash = {};
    return (n) => {
        if (cash[n]) {
            console.log('get from cash', cash[n]);
            return cash[n];
        }
        const result = fn(n);
        cash[n] = result;
        console.log('calculated', result);
        return result;
    }
}

const cashedFactorial = cashFunction(factorial);

cashedFactorial(5);
cashedFactorial(5);
cashedFactorial(4);
cashedFactorial(3);