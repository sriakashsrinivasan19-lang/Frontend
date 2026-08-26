// array of 5 numbers;

let arrValue = [10,20,30,40,50];
for(i = 0; i < arrValue.length; i++){
    console.log(arrValue[i]);
}

//  array of 5 student names;

let studentInfo = ["sriakash", "praveen", "arun", "bhuvi", "kiru"];
for(i = 0; i < studentInfo.length; i++){
    console.log("Student Name :", studentInfo[i]);
}

//  array of numbers. Use a for loop to find and print only the even numbers.

let numberValue = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i<= numberValue.length; i++){
    if (numberValue[i] % 2 === 0) { 
         console.log(numberValue[i]);
    } 
}


// array of student objects containing name and mark. Use a for loop to print the names of students who scored more than 80.

let studentObject = [{name : "sriakash" , mark : "70"}, {name : "praveen" , mark : "87"} , {name : "bhuvi" , mark : "80"}];
for(let i = 0; i <= studentObject.length; i++){
    if(studentObject[i].mark >80 ){
        console.log(studentObject[i]);
    }
}