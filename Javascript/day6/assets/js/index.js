let printNumber = "";
for(let numberValue = 0; numberValue <= 20; numberValue++) {
    printNumber = printNumber + numberValue + "";
    
}
console.log(printNumber);

let evenNumber = "";
for(let number_Value = 0; number_Value <=50; number_Value++) {
    if(number_Value % 2 === 0){
        evenNumber = evenNumber + number_Value + "";
    }
}

console.log("even Number:", evenNumber);

let oddNumber = "";
for(let num_Value = 0; num_Value <= 50; num_Value++) {
    if(num_Value % 2 === 1){
        oddNumber = oddNumber + num_Value + "";
    }
}

console.log("Odd Number:", oddNumber);

let sumValue = 0;
for(childrenCount = 1; childrenCount <= 20; childrenCount++) {
    sumValue = sumValue + childrenCount;
   
}

 console.log(sumValue);

 let evensum = 0;

for (let studentCount = 1; studentCount <= 50; studentCount++) {
    if (studentCount % 2 === 0) {
        evensum += studentCount;
    }
}

console.log(evensum);

let evenCount = 0;

for (let totalCount = 1; totalCount <= 100; totalCount++) {
    if (totalCount % 2 === 0) {
        evenCount++;
    }
}

console.log("Even Count: " + evenCount);

for (let totalNumber = 1; totalNumber <= 100; totalNumber++) {
    if (totalNumber === 73) {
        console.log("Found: " + totalNumber);
        break;
    }
}

let number = 12345;
let reverse = "";

for (let reverseNumber = number.toString().length - 1; reverseNumber >= 0; reverseNumber--) {
    reverse += number.toString()[reverseNumber];
}

console.log(Number(reverse));

let text = "javascript";
let reverseValue = "";

for (let reverseString = text.length - 1; reverseString >= 0; reverseString--) {
    reverse += text[reverseString];
}

console.log(reverse);

let textValue = "javascript";
let target = "s";

for (let Character = 0; Character < text.length; Character++) {
    if (text[Character] === target) {
        console.log("Character Found: " + text[Character]);
        break;
    }
}


