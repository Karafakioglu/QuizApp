// Selects all elements with the class "answer" and changes property on click.
document.querySelectorAll(".answer").forEach(function (a) {
    a.addEventListener("click", function () {
        this.style.backgroundColor = "red";
    })
})


const startBtn = document.getElementById("start-btn");
const test = document.getElementById("quiz-container")
startBtn.addEventListener("click", function () {
    test.style.display = "flex";
    startBtn.style.display = "none";
})

