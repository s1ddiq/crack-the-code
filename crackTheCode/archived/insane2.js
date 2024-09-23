// Array of persons of interest with responses to questions
const personsOfInterest = [
    {
        name: "Dr. Evelyn Wright",
        role: "Quantum Scientist",
        description: "Evelyn’s groundbreaking work on quantum algorithms was praised globally. But she vanished after the project went dark.",
        clueId: "clueEvelyn"
    },
    {
        name: "Victor Kane",
        role: "Security Specialist",
        description: "Victor, a former black ops agent, was involved in covering up scandals for Project 499.",
        clueId: "clueVictor"
    },
    {
        name: "Isaac Mercer",
        role: "Project Coordinator",
        description: "Isaac's calm demeanor hid his secret financial dealings within Project 499.",
        clueId: "clueIsaac"
    },
    {
        name: "Sophia Crane",
        role: "AI Developer",
        description: "Sophia was responsible for integrating quantum AI systems, but grew paranoid, believing someone was watching her.",
        clueId: "clueSophia"
    },
    {
        name: "Alex Turner",
        role: "Lead IT Developer",
        description: "Alex found backdoor access in Project 499's system but left abruptly after confronting a senior official.",
        clueId: "clueAlex"
    }
];

// Get the container to display persons of interest
const personsContainer = document.getElementById('personsContainer');
let markList = [];

// Create and insert each person's card into the container
personsOfInterest.forEach(person => {
    const personCard = document.createElement('div');
    personCard.className = 'person-card';

    personCard.innerHTML = `
        <h2>${person.name}</h2>
        <h3>${person.role}</h3>
        <p>${person.description}</p>
    `;
    
    personsContainer.appendChild(personCard);

    function markPerson() {
        const personName = person.name;
    
        // Check if the person is already marked
        if (!markList.includes(personName)) {
    
            // Check if markList has less than 2 people
            if (markList.length < 2) {
                markList.push(personName);  // Add the person
                console.log("Marked persons:", markList);
                localStorage.setItem('Person:', personName);
                localStorage.setItem('People:', markList);
                // Remove card and reveal clue
                personsContainer.removeChild(personCard);
                let clueNumber = document.getElementById(person.clueId).style.display = 'block'; // Reveal associated clue
                localStorage.setItem('Information?', clueNumber);
            } else {
                proceedToNextLevel();
                console.log('All people received');  // Stop adding if the limit is reached
                return;  // Prevent further execution of the function
            }
        } else {
            console.log('Person already marked.');
        }
    }
    

    // Add event listener to mark person when their card is clicked
    personCard.addEventListener('click', markPerson);
});

// Function to proceed to the next level
function proceedToNextLevel() {
    alert("Proceeding to the next phase of the investigation...");
    // Add any functionality needed to load the next stage or storyline
    window.GeolocationPosition;
    window.location.href = 'phase2.html';
}

// Storyline text management
const storyline = [
    "Project 499 began as a groundbreaking scientific initiative...",
    "But it soon became evident that the project had a hidden agenda...",
    "The project's true purpose was not to help humanity but to manipulate and control...",
    "...",
    '------------------------------------------------------------'
];

let currentIndex = 0;
const dialog = document.getElementById('dialog');

function showNextText() {
    dialog.style.opacity = 0; // Fade out
    setTimeout(() => {
        dialog.textContent = storyline[currentIndex];
        dialog.style.opacity = 1; // Fade in
        currentIndex = (currentIndex + 1) % storyline.length; // Move to the next index
    }, 1000); // Delay to match the fade out duration

    if (currentIndex === storyline.length - 1) {
        setTimeout(() => {
            document.getElementById('screenOne').classList.add('hidden');
            document.getElementById('screenTwo').classList.remove('hidden');
        }, 1000);
    }
}

// Initial text display
showNextText();

// Change text on spacebar press
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        showNextText();
    }
});
