export class Person {

    // public name: string;
    // public address: string;

    constructor(
        public name: string,
        public address: string) {}

}

// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super(realName, 'NY');
//     }

// }

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        
    }

}

const evans = new Person('Evans', 'NY');

const cap = new Hero('Captain America', 100, 'Evans', evans);

console.log(cap)

