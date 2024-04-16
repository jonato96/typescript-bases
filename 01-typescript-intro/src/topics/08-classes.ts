export class Person {

    // public name: string;
    // public address: string;

    constructor(
        public name: string,
        public address: string) {}

}

export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, 'NY');
    }

}

const ironman = new Person('Jona', 'Ec');

const cap = new Hero('Captain America', 100, 'Evans');

console.log(ironman)
console.log(cap)

