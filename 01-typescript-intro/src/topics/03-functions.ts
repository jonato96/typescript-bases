function addNumber(a: number, b:number): number {
    return a + b;
}

const addNumberArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(first: number, second?: number, base: number = 2) {
    return first * base;
}

const result = addNumber(1,1); 
const resultArrow = addNumberArrow(1,1); 
const multiplyResult = multiply(5);

console.log({ result, resultArrow, multiplyResult });


export {};