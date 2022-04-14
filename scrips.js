// Card Info
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
]

// Capture game container
const gameContainer = document.querySelector('.memory-game-container');

// Generate cards
const generateCards = () => {
    // Randomize cards
    const randomizer = () => {
    const characterCards = cardData();
    characterCards.sort(() => Math.random() - 0.5);
        // Create HTML elements
        characterCards.forEach((character) => {
            const card = document.createElement('div');
            card.classList = 'card';
            const front = document.createElement('img');
            front.classList = 'front-face';
            const back = document.createElement('img');
            back.classList = 'back-face'; 
            // Add images to cards
            front.src = character.src;
            front.alt = character.alt;
            back.src = './assets/card-back-face.webp';
            back.alt = 'back-face';
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
    randomizer();
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
                setTimeout(() => card.classList.remove('flipCard'), 1200);
            })
        }
    }
}
checkCards();
// Reset at the end of the game
// Keep a counter?


