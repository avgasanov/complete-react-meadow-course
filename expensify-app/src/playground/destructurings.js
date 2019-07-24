const person = {
    name: 'Andrew',
    location: {
        city: 'Philodelphia',
        temp: 92
    }
}

const {age: ageCount = 26, name: surname} = person;
console.log(`${surname} is ${ageCount}`);

// Array destructuring
const address = ['12 HZ Street', 'Baku', 'Mardakan', '1912']
const [ , city, village, zip] = address; 

console.log(`I'm in ${city} ${village}`);