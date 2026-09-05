const numbers = [10, 20, 30, 40, 50];

numbers.push(60);
numbers.push(70);
numbers.push(80);

console.log(numbers);


const fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Pineapple"];

const removed1 = fruits.pop();
const removed2 = fruits.pop();

console.log("Removed:", removed1);
console.log("Removed:", removed2);
console.log("Final Array:", fruits);


const cities = ["Chennai", "Mumbai", "Delhi", "Bangalore", "Hyderabad"];

const removedCity = cities.shift();

cities.unshift("Coimbatore");

console.log("Removed City:", removedCity);
console.log("Final Array:", cities);


const students = ["Arun", "Bala", "Kumar", "Ravi", "Suresh"];

students.forEach(function (student, index) {
    console.log((index + 1) + ". " + student);
});


const numberValue = [10, 20, 30, 40, 50];

const result = numberValue.map(function (number) {
    return number * 2;
});

console.log(result);