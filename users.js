// const users = ['Petras', 'Maryte', 'Jonas', 'Ona'];

import { file } from "./lib/file.js";

console.log(file);

const users = [
    { name: 'Petras', age: 99, isMarried: true },
    { name: 'Maryte', age: 87, isMarried: false },
    { name: 'Jonas', age: 66, isMarried: false },
    { name: 'Ona', age: 54, isMarried: true },
];

// let i = 0;
// for (const user of users) {
//     const fileName = user.name.toLowerCase() + '.json';
//     console.log(`${++i}) Studentas: ${user.name} is ${user.age} 
//     years old and is ${user.isMarried ? '' : ' not'} married (${fileName}).`);
// }

// Kiekviena user objekta irasyti i atskira faila, 
//kurie turetu buti talpinami `.data/users` folderyje. 
//Failo pavadinimas atitinka sablona `vardenis.json` (mazosios raides).

let i = 0;
for (const user of users) {
    const fileName = user.name.toLowerCase() + '.json';
    await file.create('users', fileName, user);

}
