// phase2.js

// Define room data
const rooms = {
    room1: {
        id: 'room1',
        name: 'Library',
        description: 'A dusty old library filled with ancient books and hidden secrets.',
        items: ['book', 'letter'],
        clues: ['clueLibrary'],
        connectedRooms: ['room2', 'room3']
    },
    room2: {
        id: 'room2',
        name: 'Study',
        description: 'A cluttered study with papers scattered around and a locked drawer.',
        items: ['paper', 'key'],
        clues: ['clueStudy'],
        connectedRooms: ['room1', 'room4']
    },
    room3: {
        id: 'room3',
        name: 'Lab',
        description: 'A high-tech laboratory with various experiments and a strange device.',
        items: ['device', 'experiment'],
        clues: ['clueLab'],
        connectedRooms: ['room1', 'room5']
    },
    room4: {
        id: 'room4',
        name: 'Basement',
        description: 'A dark basement with a hidden safe and an old furnace.',
        items: ['safe', 'furnace'],
        clues: ['clueBasement'],
        connectedRooms: ['room2']
    },
    room5: {
        id: 'room5',
        name: 'Vault',
        description: 'A secure vault with a complex locking mechanism and valuable items.',
        items: ['lock', 'item'],
        clues: ['clueVault'],
        connectedRooms: ['room3']
    }
};

// Initialize current room
let currentRoomId = null;
let collectedItems = [];
let discoveredClues = [];

// Function to update room display
function updateRoomDisplay(roomId) {
    const room = rooms[roomId];
    document.getElementById('roomName').textContent = room.name;
    document.getElementById('roomDescription').textContent = room.description;

    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = '';
    room.items.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.textContent = item;
        itemElement.onclick = () => collectItem(item);
        itemsList.appendChild(itemElement);
    });

    const cluesList = document.getElementById('cluesList');
    cluesList.innerHTML = '';
    room.clues.forEach(clueId => {
        if (!discoveredClues.includes(clueId)) {
            const clueElement = document.createElement('li');
            clueElement.textContent = clueId;
            clueElement.onclick = () => revealClue(clueId);
            cluesList.appendChild(clueElement);
        }
    });

    const connectedRoomsList = document.getElementById('connectedRoomsList');
    connectedRoomsList.innerHTML = '';
    room.connectedRooms.forEach(roomId => {
        const roomElement = document.createElement('li');
        roomElement.textContent = rooms[roomId].name;
        roomElement.onclick = () => enterRoom(roomId);
        connectedRoomsList.appendChild(roomElement);
    });

    document.getElementById('backButton').style.display = 'block';
}

// Function to enter a room
function enterRoom(roomId) {
    currentRoomId = roomId;
    updateRoomDisplay(roomId);
}

// Function to exit the room and return to the room navigation
function exitRoom() {
    currentRoomId = null;
    document.getElementById('roomContent').style.display = 'none';
    document.getElementById('roomContainer').style.display = 'block';
}

// Function to collect items
function collectItem(item) {
    if (!collectedItems.includes(item)) {
        collectedItems.push(item);
        alert(`You have collected: ${item}`);
    } else {
        alert(`You already have the ${item}`);
    }
}

// Function to reveal clues
function revealClue(clueId) {
    const clueElement = document.getElementById(clueId);
    clueElement.style.display = 'block';
    discoveredClues.push(clueId);
    alert(`Clue revealed: ${clueId}`);
}

// Modal for interaction
const modal = document.getElementById('interactionModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

// Function to show modal
function showModal(content) {
    modalContent.innerHTML = content;
    modal.style.display = 'block';
}

// Function to hide modal
function hideModal() {
    modal.style.display = 'none';
}

closeModal.onclick = hideModal;
window.onclick = (event) => {
    if (event.target == modal) {
        hideModal();
    }
};

// Puzzle handling
const puzzles = {
    puzzle1: {
        id: 'puzzle1',
        description: 'Solve the riddle to unlock the safe.',
        solution: 'key',
        isSolved: false
    },
    puzzle2: {
        id: 'puzzle2',
        description: 'Find the correct combination for the vault.',
        solution: '1234',
        isSolved: false
    }
};

// Function to handle puzzles
function handlePuzzle(puzzleId, answer) {
    const puzzle = puzzles[puzzleId];
    if (puzzle.solution === answer) {
        puzzle.isSolved = true;
        alert('Puzzle solved!');
    } else {
        alert('Incorrect solution. Try again.');
    }
}

// Event listeners for puzzle solutions
document.getElementById('solvePuzzle1').onclick = () => {
    const answer = prompt('Enter the solution for the riddle:');
    handlePuzzle('puzzle1', answer);
};

document.getElementById('solvePuzzle2').onclick = () => {
    const answer = prompt('Enter the combination for the vault:');
    handlePuzzle('puzzle2', answer);
};

// Game state handling
let gameState = {
    progress: 0
};

function updateGameState(progress) {
    gameState.progress = progress;
    // Save to local storage or server if needed
    console.log(`Game progress updated: ${progress}`);
}

// Add additional features and functionalities as needed
// For example, you can add timed events, additional puzzles, and achievements

// Example of a timed event
setTimeout(() => {
    alert('A new clue has appeared in the Library!');
    // Update room or clues as needed
    // updateRoomDisplay('room1');
}, 30000); // 30 seconds delay

// Example of achievements
function unlockAchievement(achievement) {
    alert(`Achievement unlocked: ${achievement}`);
    // Add to achievements list or save progress
}

// Call unlockAchievement when appropriate in the game
// unlockAchievement('Master Detective');

// Handle user input and game logic accordingly
