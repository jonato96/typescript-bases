function addNumber(a: number, b:number): number {
    return a + b;
}

const addNumberArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(first: number, second?: number, base: number = 2) {
    return first * base;
}

// const result = addNumber(1,1); 
// const resultArrow = addNumberArrow(1,1); 
// const multiplyResult = multiply(5);

// console.log({ result, resultArrow, multiplyResult });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
 character.hp += amount;
}

const jonathan: Character = {
    name: 'Jonathan',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`)
    }
}

healCharacter(jonathan, 25);
healCharacter(jonathan, 25);

jonathan.showHp();


export {};