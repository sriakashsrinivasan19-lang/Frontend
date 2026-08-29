// var, let, const;

// VAR
var a = 10;
var a = 20;       // Redeclaration allowed
a = 30;           // Reassignment allowed

console.log(a);


// LET
let b = 10;
// let b = 20;    // Redeclaration NOT allowed
b = 30;           // Reassignment allowed

console.log(b);


// CONST
const c = 10;
// const c = 20;  // Redeclaration NOT allowed
// c = 30;        // Reassignment NOT allowed

console.log(c);


// SCOPE

if (true) {
    var x = "var";
    let y = "let";
    const z = "const";

    console.log(x);
    console.log(y);
    console.log(z);
}

console.log(x);   // var can be accessed outside the block
// console.log(y); // Error - block scope
// console.log(z); // Error - block scope


// HOISTING

console.log(value);   // undefined
var value = 100;

// console.log(number); // ReferenceError - TDZ
let number = 200;

// console.log(score);  // ReferenceError - TDZ
const score = 300;

// --------------------------------------------------------------

// Normal Function => Arrow Function
const add = (a, b) => {
    return a + b;
};

const square = (n) => {
    return n * n;
};

console.log(add(10, 20));
console.log(square(5));

const addValue = (a, b) => a + b;

const squareValue = (n) => n * n;

console.log(addValue(10, 20));
console.log(squareValue(5));

// ------------------------------------------------------

// Array & Object Destructuring

const numbers = [10, 20, 30];

const student = {
    name: "dhana",
    age: 22,
    course: "JavaScript"
};


// Array Destructuring

const [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);


// Object Destructuring

const { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);

// ------------------------------------------------------

// Rest Parameter & Spread Syntax

const addNumbers = (...numbers) => {
    let total = 0;

    for (let number of numbers) {
        total = total + number;
    }

    return total;
};

console.log(addNumbers(10, 20, 30, 40));

const numberValue = [10, 20, 30];

const newNumberValue = [...numbers, 40, 50];

console.log(newNumberValue);

// ------------------------------------------------------

// Default Parameter + Template Literal

const studentDetails = (name, course, city = "Chennai") => {
    return `My name is ${name}. I am studying ${course} in ${city}.`;
};

console.log(studentDetails("prakash", "JavaScript"));
console.log(studentDetails("ram", "Python", "Bangalore"));

// ------------------------------------------------------------
// Student Class

class Student {

    constructor(name, age, mark) {
        this.name = name;
        this.age = age;
        this.mark = mark;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Mark: ${this.mark}`);
    }
}


const student1 = new Student("pradeep", 20, 85);
const student2 = new Student("Ani", 21, 90);

student1.displayDetails();

console.log("----------------");

student2.displayDetails();

// -------------------------------------------------------
// Promise + .then() + async/await

const loadData = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Data Loaded");
    }, 2000);

});

loadData.then((result) => {
    console.log(result);
});




const loadDatas = () => {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data Loaded");
        }, 2000);

    });

};


const getData = async () => {

    const result = await loadDatas();

    console.log(result);

};

getData();

// ---------------------------------------------------------
// Optional Chaining + Nullish Coalescing
const user = {
    name: "mohan"
};

const city = user?.city ?? "City Not Available";

console.log(city);

const users = {
    name: "mohan",
    area: "triplicane"
};

const area = users?.area ?? "area Not Available";

console.log(area);
// ----------------------------------------------------------
// ES6+ Array Methods

const _numbers = [10, 25, 30, 45, 50, 65];


// 1. Numbers greater than 30

const greaterThan30 = _numbers.filter((number) => number > 30);

console.log(greaterThan30);


// 2. First number greater than 40

const firstGreaterThan40 = _numbers.find((number) => number > 40);

console.log(firstGreaterThan40);


// 3. Check whether 50 exists

const check50 = _numbers.includes(50);

console.log(check50);


// 4. Double every value

const doubledNumbers = _numbers.map((number) => number * 2);

console.log(doubledNumbers);

// ---------------------------------------------------------
// ES5 → Modern ES6+

var userName = "Ravi";
var userAge = 25;

var studentInfo = {
    name: userName,
    age: userAge
};

var greet = function(userName) {
    return "Hello " + userName;
};

console.log(greet(userName));

const _name = "akash";
const _age = 21;

const _student = {
    _name,
    _age
};

const _greet = (_name) => `Hello ${_name}`;

console.log(_greet(_name));