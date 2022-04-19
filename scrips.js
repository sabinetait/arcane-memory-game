// Card Info
// all media is from RiotGames' Arcane: League of Legends
const cardData = () => [
    { id: 'caitlyn', src:'./assets/caitlyn.webp', alt: 'Caitlyn'},
    { id: 'jayce', src:'./assets/jayce.webp', alt: 'Jayce'},
    { id: 'jinx', src:'./assets/jinx.webp', alt: 'Jinx'},
    { id: 'mel', src:'./assets/mel.webp', alt: 'Mel'},
    { id: 'silco', src:'./assets/silco.webp', alt: 'Silco'},
    { id: 'vander', src:'./assets/vander.webp', alt: 'Vander'},
    { id: 'vi', src:'./assets/vi.webp', alt: 'Vi'},
    { id: 'viktor', src:'./assets/viktor.webp', alt: 'Viktor'},
    { id: 'caitlyn', src:'./assets/caitlyn.webp', alt: 'Caitlyn'},
    { id: 'jayce', src:'./assets/jayce.webp', alt: 'Jayce'},
    { id: 'jinx', src:'./assets/jinx.webp', alt: 'Jinx'},
    { id: 'mel', src:'./assets/mel.webp', alt: 'Mel'},
    { id: 'silco', src:'./assets/silco.webp', alt: 'Silco'},
    { id: 'vander', src:'./assets/vander.webp', alt: 'Vander'},
    { id: 'vi', src:'./assets/vi.webp', alt: 'Vi'},
    { id: 'viktor', src:'./assets/viktor.webp', alt: 'Viktor'}
];

// Capture game container
const gameContainer = document.querySelector('.memory-game-container');
// Capture all game card data
const appData = cardData();
// Randomize cards
const randomizer = () => {
    appData.sort(() => Math.random() - 0.5);
    return appData;
}
randomizer();

// Generate cards
const generateCards = () => {
    const appData = randomizer();
    // Create HTML elements
    appData.forEach((character) => {
        const card = document.createElement('div');
        card.classList = 'card';
        const front = document.createElement('img');
        front.classList = 'front-face';
        const back = document.createElement('div');
        back.classList = 'back-face'; 
        // Add images to cards
        front.src = character.src;
        front.alt = character.alt;
        card.setAttribute('id', character.id);
        // Append to game container
        gameContainer.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
        // Card Flip
        card.addEventListener('click', (event) => {
            card.classList.toggle('flipCard');
            checkCards(event);
        })
    })
}
generateCards();

// Logic for card matching
// user has to pick two cards
// if both cards match they remain front facing
// else if both cards do not match they turn back over and user has to select again
const checkCards = (event) => {
    const selectedCard = event.target;
    selectedCard.classList.toggle('isFlipped');
    const flippedCards = document.querySelectorAll('.isFlipped');
    // two cards have been selected
    if(flippedCards.length === 2) {
        if(flippedCards[0].id === flippedCards[1].id) { 
            flippedCards.forEach(card => {
                card.classList.remove('isFlipped');
                card.style.pointerEvents = 'none';
            })
        } else {
            flippedCards.forEach(card => {
                card.classList.remove('isFlipped');
                setTimeout(() => card.classList.remove('flipCard'), 1000);
            })
        }
    }
}

// Reset at the end of the game
// Capture reset button
const resetButton = document.querySelector('button');
// Flip all cards over
// Reset cards by clearing container and regenerating randomized cards again
const resetCards = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.classList.remove('flipCard');
    })
    setTimeout(() => {
        gameContainer.innerHTML = ''
        generateCards()
    }, 250);;
}
// Call reset function on click
resetButton.addEventListener('click', resetCards);


// Keep a counter?/Add a hard-mode with limited lives?


