// parts of individual cards
let icon = document.querySelectorAll(".icon");
let category = document.querySelectorAll(".cat");
let score = document.querySelectorAll(".summary-score");

document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Experienced an error when trying to fetch data :(');
        }

        return response.json()
    })
    .then((data) => {
        data.map((section, index) => {
            icon[index].innerHTML = `<img src="${section.icon}">`
            category[index].innerText = section.category;
            // score[index].innerText = `${section.score} / 100`;
            score[index].innerHTML = `<strong>${section.score}</strong> / 100`;
        })
    })
})