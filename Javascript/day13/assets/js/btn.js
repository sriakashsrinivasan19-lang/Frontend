const head = document.getElementById("head");
const button = document.getElementById("btn");

button.addEventListener("click", function () {

    head.textContent = "Welcome to JavaScript";

    
    head.style.color = "blue";

   
    head.classList.add("highlight");

});