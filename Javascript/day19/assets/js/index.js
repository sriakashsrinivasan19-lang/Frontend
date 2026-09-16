function greet(callback) {
    console.log("Hello");
    callback();
}

greet(() => {
    console.log("Welcome!");
});


let promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }

});


promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finished");
    });


    async function getData() {

    let result = await promise;

    console.log(result);
}

getData();


fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });