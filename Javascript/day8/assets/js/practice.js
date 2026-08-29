//  arrow function;

const _sum= (a,b,c,d)=> {
    
    console.log(a+b+c+d);

}
_sum(1,2,3,4)

const greet = () => {
    console.log("Hello World");
};

greet();

const getName = () => {
    return "Akash";
};

console.log(getName());

const schoolName = () => {
    return "HHSS";
}
console.log(schoolName());

const areaAddress = () => {
    return "Triplicane";

}
console.log(areaAddress());

const hospitalName = () => {
    return "Appolo";

}
console.log(hospitalName());

const houseNumber = () => {
    return 19;

}
console.log(houseNumber());

const roomCount =() => {
    return "2BHK";

}
console.log(roomCount());

const priceAmount = (a,b) => {
    return a + b;
}
console.log(priceAmount(400,500));

const contestName = () => {
    return "hackathon"

}
console.log(contestName());


const squareValue = (num) => {
    return num * num;
};

console.log(squareValue(5));

const cubeValue = (num) => {
    return num * num * num;
};

console.log(cubeValue(3));

const addValue = (a, b) => {
    return a + b;
};

console.log(addValue(10, 20));

const subValue = (a,b) => {
    return a - b;
}
console.log(subValue(60,45));

const multipleValue = (a,b) => {
    return a * b;
}
console.log(multipleValue(2,6));

const divideValue = (x,y) => {
    return x / y;
}
console.log(divideValue(10,2));

const reminderValue = (x) => {
    return x % 2 === 0;
}
console.log(reminderValue(12));

const loseEqual = (x,y) => {
    return x == y ;
    
}
console.log(loseEqual(2,3));

const strictEqual = (x,y) => {
    return x === y;
}
console.log(strictEqual("sri", "sri"));

const greaterValue = (x,y) => {
    return x > y;
}
console.log(greaterValue(3,2));

const lessValue = (x,y) => {
    return x < y;
}
console.log(lessValue(40,41));

const greqValue = (x,y) => {
    return x >= y;
}
console.log(greqValue(5,3));

const leeqValue = (x,y) => {
    return x <= y;
}
console.log(leeqValue(40,20));

const voterAge = (age) => {
    if(age > 18){
        return "Eligible";
    } else{
        return "Not eligible";
        
    }
}
console.log(voterAge(19));

const productPrice = (price) => {
    if(price < 200){
        return "ok";
    } else if(price < 500){
        return "good";
    } else if(price < 800){
        return "extraordinery";
    } else{
        return "Better Luck Next Time";
    }
}
console.log(productPrice());

const divisibleByThreeAndFive = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both 3 and 5";
    } else {
        return "Not Divisible by both";
    }
}
console.log(divisibleByThreeAndFive(15));


const rectangleArea = (length, width) => {
    return length * width;
}

console.log(rectangleArea(10, 5));

const rectanglePerimeter = (length, width) => {
    return 2 * (length + width);
}

console.log(rectanglePerimeter(10, 5));

const simpleInterest = (principal, rate, time) => {
    return (principal * rate * time) / 100;
}

console.log(simpleInterest(10000, 5, 2));

const circleArea = (radius) => {
    return Math.PI * radius * radius;
}

console.log(circleArea(5));

const calculatePercentage = (obtainedMarks, totalMarks) => {
    return (obtainedMarks / totalMarks) * 100;
}

console.log(calculatePercentage(450, 500));

const calculateDiscount = (price, discountPercentage) => {
    return (price * discountPercentage) / 100;
};

console.log(calculateDiscount(1000, 10));

const finalPrice = (price, discountPercentage) => {
    const discount = (price * discountPercentage) / 100;

    return price - discount;
};

console.log(finalPrice(1000, 10));

const calculateSalary = (basicSalary, bonus, allowance) => {
    return basicSalary + bonus + allowance;
};

console.log(calculateSalary(30000, 5000, 2000));

const calculateProfit = (sellingPrice, costPrice) => {
    return sellingPrice - costPrice;
};

console.log(calculateProfit(1500, 1000));

const calculateLoss = (costPrice, sellingPrice) => {
    return costPrice - sellingPrice;
};

console.log(calculateLoss(1000, 800));

const checkLeapYear = (year) => {
    if (
        (year % 4 === 0 && year % 100 !== 0) ||
        year % 400 === 0
    ) {
        return "Leap Year";
    }

    return "Not a Leap Year";
}
console.log(checkLeapYear());

const checkDelivery = (orderAmount) => {
    if (orderAmount >= 1000) {
        return "Free Delivery";
    } else {
        return "Delivery Charge ₹100";
    }
};

console.log(checkDelivery(1500));

const login = (username, password) => {
    if (username !== "admin") {
        return "Invalid Username";
    } else if (password !== "12345678") {
        return "Invalid Password";
    } else {
        return "Login Successful";
    }
};

console.log(login("admin", "12345678"));

const calculateBonus = (salary) => {
    if (salary >= 50000) {
        return salary * 0.20;
    } else if (salary >= 30000) {
        return salary * 0.10;
    } else {
        return salary * 0.05;
    }
};

console.log(calculateBonus(60000));

const calculateSpeed = (distance, time) => {
    return distance / time;
};

console.log(calculateSpeed(100, 2));

const calculateGST = (price, gstPercentage) => {
    return (price * gstPercentage) / 100;
};

console.log(calculateGST(1000, 18));

const carBrand = (car) => {
    return car;
}
console.log(carBrand("Toyoto"));

const findLargest = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

console.log(findLargest(10, 20));

const findSmallest = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
};

console.log(findSmallest(10, 20));

const checkNumber = (num) => {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
};

console.log(checkNumber(-10));

const checkResult = (mark) => {
    if (mark >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
};

console.log(checkResult(75));

const getGrade = (mark) => {
    if (mark >= 90) {
        return "A";
    } else if (mark >= 75) {
        return "B";
    } else if (mark >= 50) {
        return "C";
    } else {
        return "Fail";
    }
};

console.log(getGrade(85));

const movieEntry = (age) => {
    if (age >= 18) {
        return "Entry Allowed";
    } else {
        return "Entry Not Allowed";
    }
};

console.log(movieEntry(20));


// function declaration;

function userName(a){
    return a;
}
console.log(userName ("sriakash"));

function userPassword(a){
    return a;
}
console.log(userPassword ("1234"));

function userNumber(a){
    return a;
}
console.log(userNumber ("9840986931"));

function userEmail(a){
    return a;
}
console.log(userEmail ("sri@gmail.com"));

function userId(a){
    return a;
}
console.log(userId ("6339"));

function userInstitute(a){
    return a;
}
console.log(userInstitute ("SLA"));

function userCourse(a){
    return a;
}
console.log(userCourse ("FullStack"));

function courseFees(a){
    return a;
}
console.log(courseFees (40000));

function courseDuration(a){
    return a;
}
console.log(courseDuration ("4 month"));

function placementType(a){
    return a;
}
console.log(placementType ("Offline and online"));



