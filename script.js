const cards = [
    { question: "Colores de la bandera de Francia", answer: ["Azul", "Blanco", "Rojo"], colors: ["#0055A4", "#FFFFFF", "#EF4135"], number: 3, details: "" },
    { question: "Colores de la bandera de Italia", answer: ["Verde", "Blanco", "Rojo"], colors: ["#009246", "#FFFFFF", "#CE2B37"], number: 3, details: "" },
    { question: "Color del cielo durante el día", answer: ["Azul"], colors: ["#1E90FF"], number: 1, details: "" },
    { question: "Colores de una sandía por dentro y por fuera", answer: ["Rojo", "Verde"], colors: ["#FC3D32", "#4CAF50"], number: 2, details: "" },
    { question: "Las Supernenas", answer: ["Azul", "Rosa", "Verde"], colors: ["#0055A4", "#FF4E88", "#4CAF50"], number: 3, details: "Burbuja, Pétalo y Cactus" }
];

let remainingCards = [...cards];
let flipped = false;

function newCard() {
    if (remainingCards.length === 0) {
        remainingCards = [...cards]; // Reiniciar si se acaban
    }
    
    const index = Math.floor(Math.random() * remainingCards.length);
    const currentCard = remainingCards.splice(index, 1)[0]; // Sacar la tarjeta del array
    
    document.querySelector(".question-text").textContent = currentCard.question;
    document.querySelector(".question-number").textContent = `${currentCard.number}`;
    
    const answerContainer = document.querySelector(".answer");
    answerContainer.innerHTML = "";
    
    const colorsContainer = document.createElement("div");
    colorsContainer.classList.add("colors-container");
    
    currentCard.answer.forEach((color, index) => {
        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");
        colorBox.style.backgroundColor = currentCard.colors[index];
        colorsContainer.appendChild(colorBox);
    });
    
    const colorsText = document.createElement("p");
    colorsText.textContent = currentCard.answer.join(", ");
    colorsText.classList.add("colors-text");

    if(currentCard.details != "") {
        const detailsText = document.createElement("p");
        detailsText.textContent = currentCard.details;
        detailsText.classList.add("details-text");

        answerContainer.append(colorsContainer, colorsText, detailsText);
    } else {
        answerContainer.append(colorsContainer, colorsText);
    }
    
    document.querySelector(".card").classList.remove("flipped");
    flipped = false;
}

function flipCard() {
    document.querySelector(".card").classList.toggle("flipped");
    flipped = !flipped;
}

document.addEventListener("DOMContentLoaded", newCard);