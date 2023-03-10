function factorial(i){
    if(i==1){
        return 1;
    }
    return i * factorial(i -1);
}

const result = factorial(5);
console.log(result);

/* 
5 * factorial(4)
5 * 4 * factorial(3)
5 * 4 * 3 * factorial(2)
5 * 4 * 3 * 2 * factorial(1)
5 * 4 * 3 * 2 * 1
*/