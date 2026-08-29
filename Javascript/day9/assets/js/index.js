// function + parameters;

let sumValue = (a,b) => {
    return a+b;
}
console.log(sumValue(10,20));

// function + for loop;
const printEvenNumbers = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
};

printEvenNumbers(20);

// arrow function + factorial;

const factorial = (n) => {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
};

console.log(factorial(5));

// Scope with Arrow Function;

var globalVariable = "Global Scope";

const scopeDemo = () => {

    var functionVariable = "Function Scope";

    console.log(globalVariable);
    console.log(functionVariable);

    if (true) {
        let blockVariable = "Block Scope";
        const blockConstant = "Block Scope";

        console.log(blockVariable);
        console.log(blockConstant);
    }
};

scopeDemo();
console.log(globalVariable);


//  Hoisting

console.log(a); 
var a = 10;

 console.log(b);  
let b = 20;

 console.log(c);  
const c = 30;

//  greet();  
const greet = () => {
    console.log("Hello Buddy");
};

greet();

