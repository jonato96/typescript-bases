interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// function taxCalculation(options: TaxCalculationOptions): [number, number] {
// function taxCalculation( {tax, products} : TaxCalculationOptions ): [number, number] {
function taxCalculation( options : TaxCalculationOptions ): [number, number] {
    const {tax, products} = options;
    let total = 0;
    products.forEach( ({ price }) => {
        total += price;
    })
    return [total, total * tax]
}

const phone: Product = {
    description: 'IPhone',
    price: 1000.0
}

const tablet: Product = {
    description: 'IPad',
    price: 1250.0
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax
})

console.log('Total', total)
console.log('Tax', taxTotal)


export {};