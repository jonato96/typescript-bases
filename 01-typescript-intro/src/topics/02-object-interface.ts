const skills : string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string;
}

const strider: Character = {
    name: 'Jona',
    hp: 100,
    skills: ['Bash', 'Counter']    
}

strider.homeTown = 'Ecuador';

console.table(strider);

export {};