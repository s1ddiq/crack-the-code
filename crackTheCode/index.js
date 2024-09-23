const welcomeScreen = document.getElementById("welcome-screen");
const playBtn = document.getElementById("play-btn");
// WELCOME
const menuScreen = document.getElementById("menu-screen");
const proceedBtn = document.getElementById("proceed-btn");
// MENU SCREEN
const CODE_ENTRY_SCREEN = document.getElementById("code-entry-screen");

let userKeys = [];
// UTILITY
let locationEL = document.getElementById("locationEL");
let codeInput = document.getElementById('code-input');
let submitBtn = document.getElementById('code-submitBtn');
const audioScreen = document.getElementById('audio-entry-screen')
const bodySC = document.querySelector('body');
const morseCodeClue = document.getElementById('morse-code-clue');
// MAIN FUNCTIONS
function play() {
  welcomeScreen.style.animation = "slide-down 1s ease forwards";
  setTimeout(() => {
    welcomeScreen.style.display = "none";
    menuScreen.classList.remove("hidden");
    menuScreen.style.animation = "slide-in 1s ease forwards";
  }, 3000); // Delay to match the animation duration
}

const consoleScreen = document.getElementById('console-screen');
let codeNumbers = document.querySelectorAll('.hidden-number'); // Select all .hidden-number elements

function startGame() {
  menuScreen.classList.add("hidden");
  
  // Loop through each hidden-number element and add the .shown class
  codeNumbers.forEach((codeNumber) => {
    codeNumber.classList.add('shown');
  });

  CODE_ENTRY_SCREEN.classList.remove("hidden");
  CODE_ENTRY_SCREEN.style.opacity = "1";


  submitBtn.addEventListener('click', () => {
    const enteredValue = codeInput.value;
    if(enteredValue === '18186') {
      // alert('correct! please wait moving you to another screen....');
      audioScreen.classList.add('shown');
      CODE_ENTRY_SCREEN.classList.add('hidden');
       // If codeNumbers is a NodeList (multiple elements), loop through each
    codeNumbers.forEach((codeNumber) => {
      codeNumber.classList.remove('shown');
      morseCodeClue.classList.remove('hidden');
  });


    } else {
      alert('try again!');
    }
  })

  morseCodeClue.addEventListener('click', () => {
    if (userKeys.includes('door key 1')) {
      console.log('collected key')
    } else 
    userKeys.push('door key 1');
    console.log(userKeys);

    alert('ctrl + shift + i > console')
    consoleScreen.classList.add('shown');
console.log('expand console')
console.log('%cDOOR ONE', 'color: white; background-color: blue; padding: 5px; font-size: 16px; font-weight: bold; border-radius: 5px; cursor: pointer;');

console.log(`
               _                            _          _   _                _                                      
              | |                          | |        | | | |              | |                                     
 __      _____| | ___ ___  _ __ ___   ___  | |_ ___   | |_| |__   ___    __| |_   _ _ __   __ _  ___  ___  _ __    
 \\ \\ /\\ / / _ \\ |/ __/ _ \\| '_ \` _ \\ / _ \\ | __/ _ \\  | __| '_ \\ / _ \\  / _\` | | | | '_ \\ / _\` |/ _ \\/ _ \\| '_ \\   
  \\ V  V /  __/ | (_| (_) | | | | | |  __/ | || (_) | | |_| | | |  __/ | (_| | |_| | | | | (_| |  __/ (_) | | | |_ 
   \\_/\\_/ \\___|_|\\___\\___/|_| |_| |_|\\___|  \\__\\___/   \\__|_| |_|\\___|  \\__,_|\\__,_|_| |_|\\__, |\\___|\\___/|_| |_(_)
                                                                                           __/ |                   
                                                                                          |___/                    
`);

// Add an event for when the user clicks in the console (to simulate the "Click Me" button)
console.log('Click the message above to visit: http://127.0.0.1:5500/math.html');

console.log = (function(oldLog) {
    return function(message) {
        if (message === 'Click Me') {
            window.open('http://127.0.0.1:5500/math.html', '_blank'); // Opens a link in a new tab
        } else {
            oldLog.apply(console, arguments);
        }
    };
})(console.log);

  })

  
  

}

