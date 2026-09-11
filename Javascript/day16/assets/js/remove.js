let container = document.getElementById("container");
let remButton = document.getElementById("removeBtn");

remButton.addEventListener("click", function () {
    container.classList.remove("active");
});
