let btn = document.getElementById("btn")
let color = document.getElementById("color")

let choices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", function () {
    let col = getRandomChoice()
    document.body.style.backgroundColor = col
    color.style.color = col
    color.textContent = col
})

function getRandomChoice() {
    let col = "#"
    for (let i = 0; i < 6; i++) {
        let random_number = getRandomNumber();
        let random_char = choices[random_number]
        col += random_char
    }
    return col
}

function getRandomNumber() {
    return Math.floor(Math.random() * 16)
}