function processNumber(number, callback) {
    let result = number * 2;
    callback(result);
}

function displayResult(result) {
    console.log(result);
}

processNumber(10, displayResult);


function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter();
counter();
counter();


const values = [10, 20, 30, 40, 50];

values.push(60);
values.push(70);

values.pop();

console.log(values);


const numbers = [20, 30, 40, 50];

numbers.unshift(10);

numbers.shift();

console.log(numbers);


const numberValue = [10, 20, 30];

const newArray = [];

for (let i = 0; i < numberValue.length; i++) {
    newArray[i] = numberValue[i];
}

newArray[newArray.length] = 40;

console.log(newArray);


const fruits = ["Apple", "Mango", "Orange"];
const vegetables = ["Carrot", "Potato"];


fruits.push("Banana");


fruits.pop();


fruits.unshift("Grapes");


fruits.shift();


console.log("Length:", fruits.length);


const finalArray = fruits.concat(vegetables);

console.log(finalArray);