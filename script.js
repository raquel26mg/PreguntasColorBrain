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

let cards = [];
let remainingCards = [];
let flipped = false;

function loadCards() {
    fetch('cards.json')
        .then(Response => Response.json())
        .then(data => {
            cards = data;
            remainingCards = [...cards];
            newCard();
        })
        .catch(error => console.error('Error al cargar las tarjetas:', error));
}

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

document.addEventListener("DOMContentLoaded", loadCards);