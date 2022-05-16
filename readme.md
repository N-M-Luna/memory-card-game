# Memory Card Game

## Description

This [single-page web app](https://n-m-luna.github.io/memory-card-game/) is an implementation of **a card game called Memory**; also known as Concentration, Matching Pairs, Match Match, or Match Up. If you would like, you can read the [wikipedia article](https://en.wikipedia.org/wiki/Concentration_(card_game)) on this game.

This web app was coded with HTML, CSS, and JS. If you are interested in the development of the web app, the [author](https://github.com/N-M-Luna) wrote a dev blog.

## How to use the web app

The game starts by shuffling and dealing a deck of 16 card (8 pairs of identical cards) face-down on the game board.

In each turn, the player flips two cards. If they match, the player has solved the pair of cards and they remain facing up. If the cards do not match, they get flipped over again.

The game ends when all the cards have been solved.

In the top left corner, there is a settings button that opens a **deck menu**. This allows the player to change the deck. *The deck library consists of six decks with the following themes: food, camping, animals, science, household, and tech.*

In the top right coner, there is a help button that opens a **help screen** with the rules of the game.

## Motivation

This project was an exercise to practice developing a web app from scratch, documenting software, and writing clear (and well-commented) code.

## Build Status (BUGS!)

The game runs from start to finish. The player is able to switch decks at any time and to restart the game at the End-Of-Game screen.

There is one bug left to fix: The game crashes if the player clicks too fast.

## Future features

1. **Audio**: Add success and failure sounds for each end-of-turn scenario.

2. **Color Picker**: Add the option to pick a color in the Deck Menu.

3. **User profiles**: Add the option to create a profile that records a username, an avatar, and the highest score for each player.

4. **Share score on social media**:  Add functionality to the Share button on the End-Of-Game screen.

5. **Rate the game**: Add functionality to the Rate button on the End-Of-Game screen.


## How to contribute

1. Fork the repo on GitHub.

2. Clone the project to your own computer.

3. Commit changes to your own branch.

4. Push your work back up to your fork.

5. Submit a Pull request so that I can review your changes.

## Credits

In general, I used the [W3Schools Docs](https://www.w3schools.com/) and the [MDN Web Docs](https://developer.mozilla.org/en-US/).

For the card-flipping animation, I followed this [intro to CSS 3D transforms article](https://3dtransforms.desandro.com/) by DeSandros and this [HowTO article](https://www.w3schools.com/howto/howto_css_flip_card.asp) from W3Schools.
