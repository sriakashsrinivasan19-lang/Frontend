let paragraph = document.getElementById("message");
let button = document.getElementById("toggleBtn");

paragraph.classList.add("hidden");

button.addEventListener("click", function () {
    paragraph.classList.toggle("hidden");
});

// ______________________________________________________

let box = document.getElementById("box");
let buttons = document.getElementById("colorBtn");

buttons.addEventListener("click", function () {
    box.classList.toggle("green");
});

// ____________________________________________________

let details = document.getElementById("details");
let btn = document.getElementById("detailsBtn");

btn.addEventListener("click", function () {

    details.classList.toggle("show");

    if (details.classList.contains("show")) {
        btn.textContent = "Hide Details";
    } else {
        btn.textContent = "Show Details";
    }

});