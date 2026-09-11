let students = [];

let addButton = document.getElementById("addStudent");

addButton.addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;

    let student = {
        name: name,
        age: age,
        city: city
    };

    students.push(student);

    let studentList = document.getElementById("studentList");

    studentList.innerHTML = "";

    students.forEach(function (student) {

        let div = document.createElement("div");

        div.innerHTML = `
            <p>Name: ${student.name}</p>
            <p>Age: ${student.age}</p>
            <p>City: ${student.city}</p>
            <hr>
        `;

        studentList.appendChild(div);
    });
});


let employees = [];

let addBtn = document.getElementById("addEmployee");

addBtn.addEventListener("click", function () {

    let _name = document.getElementById("employeeName").value;
    let department = document.getElementById("department").value;
    let salary = document.getElementById("salary").value;

    let employee = {
        name: _name,
        department: department,
        salary: salary
    };

    employees.push(employee);

    let employeeList = document.getElementById("employeeList");

    employeeList.innerHTML = "";

    employees.forEach(function (employee) {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
        `;

        employeeList.appendChild(row);
    });
});


let products = [];

let addButtons = document.getElementById("addProduct");

addButtons.addEventListener("click", function () {

    let name_ = document.getElementById("productName").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;

    let product = {
        name: name_,
        price: price,
        category: category
    };

    products.push(product);

    let productList = document.getElementById("productList");

    productList.innerHTML = "";

    products.forEach(function (product) {

        let card = document.createElement("div");

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: ${product.category}</p>
            <hr>
        `;

        productList.appendChild(card);
    });
});