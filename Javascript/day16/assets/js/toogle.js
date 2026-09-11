

let card = document.getElementById("card");
let thmeButton = document.getElementById("themeBtn");

thmeButton.addEventListener("click", function () {
    card.classList.toggle("dark");
});