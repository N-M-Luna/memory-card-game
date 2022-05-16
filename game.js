//JS for the Memory Card Game ---------------------------------------

// Part 0. Deck Library and Global Variables and Constants

// Part 1. Shuffle and Deal the Cards
//  Part 1.1: Flip all cards face down.
//  Part 1.2: Put the deck's logo in each of the cards's fronts.
//  Part 1.3: Grab a sub-array of the appropriate array from the Deck Library.
//  Part 1.4: Shuffle the subarray we created in the previous step.
//  Part 1.5: Place each of the card faces from the deckInUse in the back-face of the cards.
//  Part 1.6: Change decks.

// Part 2. Title Bar Buttons: Help and Settings Buttons
//  Part 2.1: Toggle open and close the Rules and Deck Menu screens.
//  Part 2.2: Just close the Rules and Deck Menu screens.

// Part 3. Game Logic (Any time a player clicks on a card)
//  Part 3.1: First card is turned over.
//  Part 3.2: Second card is turned over.
//  Part 3.3: End-of-turn subroutine.
// Part 3.4: Start a new turn

// Part 4. Social Icons
//  Part 4.1: Change from square to regular icons (when the mouse is on top of the social icon).
//  Part 4.2: Change from regular to square icons (when the mouse is no longer on top of the social icon).

// Part 5. End of Game

//------------------------------------------------------------------

// Part 0. Deck Library and Global Variables and Constants

const foodDeck = ["fa-apple-whole", "fa-bacon", "fa-burger", "fa-mug-saucer", "fa-pepper-hot", "fa-cookie", "fa-ice-cream", "fa-martini-glass", "fa-pizza-slice", "fa-carrot", "fa-candy-cane", "fa-egg", "fa-lemon", "fa-hotdog", "fa-cake-candles", "fa-wine-glass"];

const campingDeck = ["fa-binoculars", "fa-campground", "fa-compass", "fa-faucet", "fa-fire", "fa-map", "fa-kit-medical", "fa-person-hiking", "fa-mountain", "fa-signs-post", "fa-trailer", "fa-tree", "fa-route", "fa-bug", "fa-volcano", "fa-shoe-prints"];

const animalsDeck = ["fa-cat", "fa-crow", "fa-dog", "fa-dove", "fa-fish", "fa-frog", "fa-hippo", "fa-horse", "fa-spider", "fa-shrimp", "fa-kiwi-bird", "fa-otter", "fa-feather", "fa-dragon", "fa-bug", "fa-bone"];

const scienceDeck = ["fa-atom", "fa-biohazard", "fa-brain", "fa-capsules", "fa-radiation", "fa-dna", "fa-eye-dropper", "fa-tablets", "fa-magnet", "fa-microscope", "fa-mortar-pestle", "fa-syringe", "fa-flask", "fa-square-root-variable", "fa-function"];

const householdDeck = ["fa-tv", "fa-toilet", "fa-soap", "fa-stairs", "fa-shower", "fa-sink", "fa-plug", "fa-pump-soap", "fa-lightbulb", "fa-mug-saucer", "fa-bath", "fa-bed", "fa-chair", "fa-couch", "fa-toilet-paper", "fa-house-chimney"];

const techDeck = ["fa-compact-disc", "fa-computer-mouse", "fa-database", "fa-desktop", "fa-hard-drive", "fa-sd-card", "fa-floppy-disk", "fa-microchip", "fa-sim-card", "fa-calculator", "fa-print", "fa-keyboard", "fa-robot", "fa-power-off", "fa-laptop", "fa-camera"];

// Global Variables and Constants
// for the page elements
const deckMenu = document.getElementById('deck-menu');
let deckBtn = document.querySelectorAll('.deck-btn');
const gameBoard = document.getElementById('board');
const rules = document.getElementById('rules');
const card = document.querySelectorAll('.card');
const cardLogoNodes = document.querySelectorAll('.deck-logo');
const socialIcons = document.querySelectorAll(".fa-brands");
const endScreen = document.querySelector('.end-screen');
const endOption = document.querySelectorAll('.end-option');

// for shuffling and playing the game
let deckInUse = [];
let turnCounter = 1;
let chosenCardNo = [];
let chosenBackFace = [];
let solvedCardNo = [];
let cardName = '';
let flippedCardCount = 0;


// On loading the page...
console.log("Welcome!");
console.log("Starting new game. Beep-Boop-Beep.");


// Part 1: Shuffle and Deal the cards
// The Deal Function's input (called "deckTheme") can be  "food", "camping", "animals", "science", "household", or "tech".
  // Reset all counters and flip all cards face down.
  // Put the deckTheme logo on each of the card's front face.
  // Grab a 16-element sub-array (called "deckInUse") from the "deckTheme" constant in the deck library.
  // Then, it shuffles the deck and deals the cards on the board (replace the current logo and the current backface).
function deal(deckTheme) {

  // Reset all game counters.
  deckInUse.length = 0;
  turnCounter = 1;
  chosenCardNo.length = 0;
  chosenBackFace.length = 0;
  solvedCardNo.length = 0;

  // Part 1.1: Flip all cards face down.
  // FOR ALL cards from index 0 to 15,
  for (var i = 0; i < 16; i++) {
    // if they're flipped face-up,
    if (card[i].classList.contains('flipped')) {
      // flip them back face-down.
      card[i].classList.remove('flipped');
    }
  } // End Part 1.1.

// Part 1.2: Put the deck's logo in each of the cards's front face.
// For each card logo on the screen,
for (var i = 0; i < cardLogoNodes.length; i++) {
  // change the src attribute.
  cardLogoNodes[i].setAttribute("src", "img/deck-logo-" + deckTheme + ".png");
} // End Part 1.2.

// Part 1.3: Grab a sub-array of the "deckTheme" array from the Deck Library.
// This grabs 8 random cards from the deck library and stores two copies of each in the "deckInUse" array.
// Pick a random card from the array in the Deck Library.
const startingPnt = Math.floor(Math.random() * 16);

for (var i = 0; i < 8; i++) {
  // For that random card and the next 7 cards (looping to the beginning if we go over),
  let newIndex = (startingPnt + i) % 16;

  // grab the name of the card's back face, and
  let newCardFace = "";

  switch (deckTheme) {

    case "food":
      newCardFace = foodDeck[newIndex];
      break;

    case "camping":
      newCardFace = campingDeck[newIndex];
      break;

    case "animals":
      newCardFace = animalsDeck[newIndex];
      break;

    case "science":
      newCardFace = scienceDeck[newIndex];
      break;

    case "household":
      newCardFace = householdDeck[newIndex];
      break;

    case "tech":
      newCardFace = techDeck[newIndex];
      break;

    default:
      console.log("Could not find the " + deckTheme + " deck.");
  }

  // add two copies of the new card face in the "deckInUse" array.
  deckInUse.push(newCardFace);
  deckInUse.push(newCardFace);

} // End Part 1.3.

// For testing purposes:
console.log("We will be using this " + deckTheme + " deck: ");
console.log(deckInUse);

// Part 1.4: Shuffle the subarray we created in the previous step.
// Fisher-Yates Shuffle: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
// For testing purposes:
console.log("* Shuffle Shuffle *");

// Starting with the last card (index 16) and working our way to the second (index 1)
for (var i = 16; i > 0; i--) {

  // pick a random card between the first and the current index card,
  let randoNum = Math.floor(Math.random() * i); // 0 <= randoNum < (i-1)

  // take it out of the "deckInUse" array, and
  let randoCard = deckInUse.splice(randoNum, 1);

  // send it to the bottom of the deck.
  deckInUse = deckInUse.concat(randoCard);

  //For testing purposes:
  //console.log('After shuffle no. ' + i + " deck is: ");
  //console.log(deckInUse);
} // End Part 1.4.

// For testing purposes, this is the shuffled deck:
console.log(deckInUse);


// Part 1.5: Put each of the card faces from the deckInUse in each of the cards' back faces.

// Write an array with the card's back faces (the span element inside the .card elements)
let secretImg = document.querySelectorAll('.card span');
let oldImg = '';

// For each card,
for (var i = 0; i < 16; i++) {
  // Grab the current back face,
  oldImg = secretImg[i].classList[1];
  // and replace it with one from the chosen deck.
  secretImg[i].classList.replace(oldImg, deckInUse[i]);

  // For testing purposes, this is the card being dealt in this iteration:
  console.log("Dealing the " + deckInUse[i] + " card.");

}// End Part 1.5.

// Log that the cards have been dealt and that the game is ready.
console.log("Cards have been dealt, player.");
console.log("You may begin the game.");

} //End deal function

//  Part 1.6: Change decks

// For each deckBtn (i. e., all 6 .deck-btn buttons)
for (var i = 0; i < 6; i++) {
  // Add a click listener
  deckBtn[i].addEventListener('click', function(e) {

    // Grab the value of the alt attribute of the button's img. (Something like "food-deck-logo-img" or "camping-deck-logo-img".)
    let altText = e.target.alt;

    // We need only the part of that string that tells us which deck the button represents.
    let endPoint = altText.length - 14;
    let chosenDeckBtn = altText.slice(0, endPoint);

    // Now that the program knows which deck the player chose, we can deal.
    console.log("Player chose the " + chosenDeckBtn + " deck.");

    // Reset game counters and arrays.
    deckInUse.length = 0;
    turnCounter = 1;
    chosenCardNo.length = 0;
    chosenBackFace.length = 0;
    solvedCardNo.length = 0;

    // and log the change of deck.
    console.log("Switching decks now.");

    // Deal the new deck.
    deal(chosenDeckBtn);

    // Close the deck menu.
    xOutOf(deckMenu);

  });
}

// Part 2: Title Bar Buttons: Help and Settings Buttons

// HELP and SETTINGS BUTTONS toggle open and close the help screen (game rules) and the settings screen (deck menu), repectively.
// Each the help and the settings screen have X BUTTONS, which close the game rules and the deck menu.


// Part 2.1: Toggle open and close the deck menu (using the .settings-btn).

// Target the .settings-btn button.
const settingsButton = document.querySelector('.settings-btn');

// Add an event listener to the .settings-btn button.
settingsButton.addEventListener('click', toggleDeckMenu);

// Toggle deck menu. (Function)
function toggleDeckMenu() {

  // TOGGLE CASE 1: Open Deck Menu.

  // If the deck menu is not open,
  if (deckMenu.classList.contains('hidden')) {

    // then open the deck menu;
    deckMenu.classList.remove('hidden');

    // and close the game board or the rules (whichever is open).
    if (rules.classList.contains('hidden')) {
      gameBoard.classList.add('hidden');
    } else {
      rules.classList.add('hidden');
    }
  }

  //TOGGLE CASE 2: Close Deck Menu

  // If the deck menu is already open,
  else {
    // then close it and bring back the game board.
    xOutOf(deckMenu);
  }
}

// Part 2.2: Toggle open and close the Rules screens (using the .help-btn).

// Target the .help-btn button.
const helpButton = document.querySelector('.help-btn');

// Add an event listener to the help button.
helpButton.addEventListener('click', toggleRules);

// Toggle rules (function).
function toggleRules() {

  // TOGGLE CASE 1: Open Rules.

  // If the rules are not open,
  if (rules.classList.contains('hidden')) {

    // then open the rules;
    rules.classList.remove('hidden');

    // and close the game board or the deck menu (whichever is open).
    if (deckMenu.classList.contains('hidden')) {
      gameBoard.classList.add('hidden');
    } else {
      deckMenu.classList.add('hidden');
    }
  }

  //TOGGLE CASE 2: Close the rules

  // If the rules are already open,
  else {
    // then close them and bring back the game board.
    xOutOf(rules);
  }
}


//Part 2.3: Close the Rules or the Deck Menu screens.

// Close either the rules or the deck menu and open the game board. (Function)
function xOutOf(y) {

  // Close the y element, where y is either the help screen or the settings screen.
  y.classList.add('hidden');

  // Open the game board.
  gameBoard.classList.remove('hidden');
}

// Close the rules and the deck menu from the X button in each of these two screens.

// The HTML file has two instances of .x-btn buttons.
let xBtn = document.querySelectorAll('.x-btn');

// The first X button closes the deck menu.
xBtn[0].addEventListener('click', function() {
  deckMenu.classList.add('hidden');
  gameBoard.classList.remove('hidden');
});

// The second X button closes the rules
xBtn[1].addEventListener('click', function() {
  rules.classList.add('hidden');
  gameBoard.classList.remove('hidden');
});

// Part 3: Game Logic


//When a player clicks on a card,
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('click', function(e) {

    // IF the player clicks on a card that has been flipped over in this turn or a card that has been solved,
    // DO NOTHING

    // IF and only if the card hasn't already been chosen or solved,
    if (!chosenCardNo.includes(i) && !solvedCardNo.includes(i)) {
      //then it will be either the first card to be turned over (case addressed to in Part 3.1) or the second (Part 3.2).

      // Part 3.1: First card is turned over.
      // IF this is the first card to be flipped over in this turn,
      if (flippedCardCount === 0) {

        // record the card's ID number in the first slot of the chosen cards array,
        chosenCardNo[0] = i;

        // record the back face image in the first slot of the chosen backface array,
        chosenBackFace[0] = deckInUse[i];

        // flip the card face up,
        card[i].classList.toggle('flipped');

        // set the flippedCardCount to 1
        flippedCardCount = 1;

        // and log the face of the card they picked.
        cardName = chosenBackFace[0].slice(3);
        console.log("In turn no. " + turnCounter + ", you've picked the " + cardName + " card and...");

      }

      // Part 3.2: Second card is turned over.
      // IF that was the second card to be flipped over in this turn,
      else if (flippedCardCount === 1) {

        // record the card's ID number in the second slot of the chosen cards array,
        chosenCardNo[1] = i;

        // record the back face image in the second slot of the chosen backface array;
        chosenBackFace[1] = deckInUse[i];

        // record the card's name; and
        cardName = chosenBackFace[1].slice(3);
        cardName = cardName.replace('-', ' ');

        // flip the card face up.
        card[i].classList.toggle('flipped');


        // Part 3.3: End-of-turn subroutine.

        // IF the two chosen cards match,
        if (chosenBackFace[0] === chosenBackFace[1]) {

          // then log the face of the second card they picked;
          console.log("the other " + cardName + " card.")


          // log that the player had solved a pair in this turn; and
          console.log("Yay! You've solved a pair.");

          // record the solved cards.
          solvedCardNo.push(chosenCardNo[0]);
          solvedCardNo.push(chosenCardNo[1]);
        }

        //else if the two chosen cards don't match,
        else {

          //log the face of the second card they picked;
          console.log("the " + cardName + " card.");

          // log that they didn't solve a pair in this turn.
          console.log("Sorry, the cards don't match. Try again in the next turn.");

          // And wait a second beofre starting a new turn.
          setTimeout(startNewTurn, 1000);
        }

        // Go into the next turn.
        turnCounter++;
        flippedCardCount = 0;


        //The game ends when the player has solved all 8 pairs.
        if (solvedCardNo.length === 16) {
          endGame();
        }
      }
    }
  }); //end callback fn when a player clicks on a card
} //end loop for all cards

// Part 3.4: Start a New Turn.
function startNewTurn() {

  // Flip the (non-matching) cards face down.
  card[chosenCardNo[0]].classList.toggle('flipped');
  card[chosenCardNo[1]].classList.toggle('flipped');

  // Clear the chosen card no.
  chosenCardNo[0] = 20;
  chosenCardNo[1] = 20;
}

// End of the Game
function endGame() {
  // Calculate the score
  let score = turnCounter - 1;

  // and display it.
  let scoreboard = document.querySelector('.score');
  scoreboard.innerHTML = score;

  // Display the end-of-game screen.
  let endScreen = document.querySelector(".end-screen");
  endScreen.classList.remove('hidden');

  // Log the end of the game.
  console.log("Hooray! You solved the game in " + score + " turns.");
}


// Part 4: Social Icons

// SOCIAL ICONS change style when mouse is hovering over them. This behavior is implemented by using the event listeners of type mouse enter and mouse leave.

// Part 4.1: Change from square social icon to regular social icon when the mouse enters the icon's space.
for (var i = 0; i < 3; i++) {
  socialIcons[i].addEventListener('mouseenter', function(e) {

    // Get the social icon,
    let socialIcon = e.target;
    // and the class that specifies the social icon's brand.
    let socialBrand = socialIcon.classList[1];

    switch (socialBrand) {

      case "fa-twitter-square":
        socialIcon.classList.replace("fa-twitter-square", "fa-twitter");
        break;

      case "fa-linkedin":
        socialIcon.classList.replace("fa-linkedin", "fa-linkedin-in");
        break;

      case "fa-github-square":
        socialIcon.classList.replace("fa-github-square", "fa-github");
        break;

      default:
        console.log("Could not find " + socialBrand + " social icon.");
    }
  });
}

// Part 4.2: Change from square social icon to regular social icon when the mouse leaves the icon's space.
for (var i = 0; i < 3; i++) {
  socialIcons[i].addEventListener('mouseleave', function(e) {

    // Get the social icon,
    let socialIcon = e.target;
    // and the class that specifies the social icon's brand.
    let socialBrand = socialIcon.classList[1];

    switch (socialBrand) {

      case "fa-twitter":
        socialIcon.classList.replace("fa-twitter", "fa-twitter-square");
        break;

      case "fa-linkedin-in":
        socialIcon.classList.replace("fa-linkedin-in", "fa-linkedin");
        break;

      case "fa-github":
        socialIcon.classList.replace("fa-github", "fa-github-square");
        break;

      default:
        console.log("Could not find " + socialBrand + " social icon.");
    }
  });
}

// Part 5. End of Game

// First end-of-game option is to play another game.
endOption[0].addEventListener('click', function() {
  
  // deal a new deck
  deal('animals');

  // close the end screen
  xOutOf(endScreen);
});

// Second end-of-game option is the rate the game.

// Third end-of-game option is to share their score.


//
