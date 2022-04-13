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
            back.alt = 'back-face'
            // Append to game container
            gameContainer.appendChild(card);
            card.appendChild(front);
            card.appendChild(back);
        })
    }
    randomizer();
}
generateCards();

// Card Flip
const cards = document.querySelectorAll('.card');
function flipCard() {
    this.classList.toggle('flip');
}
cards.forEach((card) => {
    card.addEventListener('click', flipCard);
}) 

// Logic for card matching
// Keep a counter
// Reset at the end of the game

