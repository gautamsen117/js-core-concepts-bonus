const nayok = {
    name: 'Shakib khan', 
    id: 121, 
    address: 'movie chinema',
    isSingle: true,
    friends: ['apu', 'Razz', 'Salman', 'amir'],
    movies: [{name: 'no-2', year: 2015}, {name: 'king Khan', year: 2018}],
    act: function(){
        console.log('Actor');
    },
    car: {
        brand: 'tesla',
        price: 234555555,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            location: 'USA'
        }
    }
}

console.log(nayok.car);
nayok.act(); 