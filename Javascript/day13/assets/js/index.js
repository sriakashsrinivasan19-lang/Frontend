
const heading = document.getElementById("heading");

heading.textContent = "Welcome to JavaScript";

const paragraphs = document.querySelectorAll(".message");


paragraphs.forEach(function (paragraph) {
    paragraph.textContent = "Paragraph changed using JavaScript";
});




