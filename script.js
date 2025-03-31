const colorMap = {
    "Blanco": "#FFFFFF",
    "Gris": "#969696",
    "Negro": "#303030",
    "Marrón": "#8f554a",
    "Rojo": "#fb4345",
    "Naranja": "#f99740",
    "Amarillo": "#f5f640",
    "Verde": "#55bf51",
    "Azul": "#40afdd",
    "Lila": "#755aa7",
    "Rosa": "#fc80b4"
};

const cards = [
    { question: "Colores de la bandera de Francia", answer: ["Azul", "Blanco", "Rojo"], number: 3, details: "" },
    { question: "Colores de la bandera de Italia", answer: ["Verde", "Blanco", "Rojo"], number: 3, details: "" },
    { question: "Color del cielo durante el día", answer: ["Azul"], number: 1, details: "" },
    { question: "Colores de una sandía por dentro y por fuera", answer: ["Rojo", "Verde"], number: 2, details: "" },
    { question: "Las Supernenas", answer: ["Azul", "Rosa", "Verde"], number: 3, details: "Burbuja, Pétalo y Cactus" },
    { question: "Colores de un semáforo", number: 3, answer: ["Rojo", "Amarillo", "Verde"], details: "Detenerse, Precaución, Avanzar" },
    { question: "La sede del gobierno en Argentina", number: 1, answer: ["Rosa"], details: "" },
    { question: "Los Palotes clásicos (sin papel)", number: 1, answer: ["Rosa"], details: "" },
    { question: "La torre Eiffel", number: 1, answer: ["Marrón"], details: "" },
    { question: "Color del día cuando hay un crack en la bolsa", number: 1, answer: ["Negro"], details: "" },
    { question: "Cinta de la escena del crimen, con letras, en EE.UU.", number: 2, answer: ["Negro", "Amarillo"], details: "" },
    { question: "Japón usa dos colores para avanzar en sus semáforos: verde y…", number: 1, answer: ["Azul"], details: "" },
    { question: "Color de la pasta si pides 'Spaghetti al nero di seppia'", number: 1, answer: ["Negro"], details: "Están hechos con la tinta de la sepia" },
    { question: "Los colores de nuez, chicle y calabaza", number: 3, answer: ["Marrón", "Rosa", "Naranja"], details: "" },
    { question: "Los personajes de Cluedo", number: 6, answer: ["Rojo", "Amarillo", "Blanco", "Verde", "Azul", "Lila"], details: "" },
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
    
    currentCard.answer.forEach((color) => {
        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");
        colorBox.style.backgroundColor = colorMap[color] || "#000000";
        colorsContainer.appendChild(colorBox);
    });
    
    const colorsText = document.createElement("p");
    colorsText.textContent = currentCard.answer.join(", ");
    colorsText.classList.add("colors-text");

    if(currentCard.details != "") {
        const detailsText = document.createElement("p");
        detailsText.textContent = "(" + currentCard.details + ")";
        detailsText.classList.add("details-text");
        colorsText.classList.add("pd-b-10");

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