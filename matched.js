const numbers = [45, 24, 54, 65, 67];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for(const number of numbers){
//     console.log(number);
// }

const products = [
    { id: 1, name: 'Walton Phone', price: 19000 },
    { id: 2, name: 'iPhone', price: 19000 },
    { id: 3, name: 'mackbook Air', price: 19000 },
    { id: 4, name: 'Lenovo yoga laptop 2025', price: 19000 },
    { id: 5, name: 'Dell inspiration laptop', price: 19000 },
    { id: 6, name: 'Samsung phone note 7', price: 19000 },
    { id: 7, name: 'Nokia ald age pHone gone', price: 19000 },
    { id: 8, name: 'Phone One', price: 19000 },
    { id: 8, name: 'MI chip LapTop', price: 19000 },
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'laptop');
console.log(result);