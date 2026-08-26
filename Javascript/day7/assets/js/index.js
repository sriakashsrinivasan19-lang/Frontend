// array access;

let fruitName = ["Apple", "Mango", "Watermelon", "Grapes", "Banana"]
for(let i = 0; i < fruitName.length; i++){
    console.log(fruitName[i]);
}

// object access;

let studentInfo = {Name : "Sriakash" , Age : 21 , Course : "Fullstack Developer" , Mark : 90};
console.log(studentInfo.Name);
console.log(studentInfo.Age);
console.log(studentInfo.Course);
console.log(studentInfo.Mark);

// Array of Object;

let _student = [{name : "aaa" , age : 18, mark : 35}, {name : "bbb" , age : 19, mark : 40}, {name : "ccc" , age : 20, mark : 45}];
for(let i = 0; i < _student.length; i++){
    console.log(_student[i].name);
     console.log(_student[i].mark);
    
}

// find a student;
let _target = "";

let studentName = [{name : "mohan" , age : 21, mark : 90}, {name : "sriram" , age : 25, mark : 80}, {name : "kiruthish" , age : 22, mark : 70}];
for(let i = 0; i < studentName.length; i++){
    if(studentName[i].name === _target ){
        console.log("Found :", studentName[i]);
          
    } 
}

// salary filter;

let employeeObject = [{name : "aaa" , salary : 30000}, {name : "bbb" ,salary : 50000}, {name : "ccc" , salary : 38000}];
for(let i = 0; i < employeeObject.length; i++){
    if(employeeObject[i].salary > 40000){
        console.log(employeeObject[i].salary);
        
    }
}
