import { Product, TaxCalculationOptions, taxCalculation } from './06-funtion-destructuring';


const shoppingCart: Product[] = [
    {
        description: 'Samsung',
        price: 100
    },
    {
        description: 'Nokia',
        price: 100
    }
];

const taxCalculationData: TaxCalculationOptions = {
    products: shoppingCart,
    tax: 0.15
}

const [total, tax] = taxCalculation(taxCalculationData);

console.log('Total', total)
console.log('Tax', tax)