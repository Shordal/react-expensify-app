// const person = {
//     age: 30,
//     location: {
//         city: 'Houston',
//         temp: 70
//     }
// };

// const { name = 'Anonymous', age } = person;
// //const name = person.name;
// //const age = person.age;

// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(`${publisherName}`);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [street, city, state, zip] = address;
console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName,, mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);