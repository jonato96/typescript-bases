export interface Passager {

    name: string;
    children?: string[];

}

const passager1: Passager = {
    name: 'Jonathan'
}
const passager2: Passager = {
    name: 'Jose',
    children: ['Anto', 'Criss']
}

const printChildren = (passager: Passager) => {
    const howManyChildren = passager.children?.length || 0;
    console.log(passager.name, howManyChildren);
}

printChildren(passager1);
printChildren(passager2);