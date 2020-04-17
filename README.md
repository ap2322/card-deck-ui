# Card Deck Ui

[Play the game online](http://card-deck-ui.s3-website.us-east-2.amazonaws.com/)

### Introduction

This interface is a very simple card game. You press a button, cards are dealt, and you see the percent correct score as well as the average percent correct score of all games played. Is it fun? Well, that depends on your version of fun.

Percent correct scores are calculated by where the cards land when dealt in 4 rows of 13 cards each:
- +1 point for every card with the correct suit in it's assigned row
- +1 point for every card with the correct value in it's assigned column
- Correct rows are in order from top to bottom: spade (S), diamond (D), heart (H), and club (C)
- Correct columns are in order from left to right: \[ A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K \]
- Total correct points available are 104

The cards and calculations are generated with the [card-deck-service](https://github.com/ap2322/card-deck-service/)

### Local Setup

- Clone down this repository and run `npm install`. 
- Ensure connection to the [card-deck-service](https://github.com/ap2322/card-deck-service/)
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Technology Used
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

### Testing
The testing suite is with Jasmine and Karma as integrated through the Angular CLI ([angular.io/testing](https://angular.io/guide/testing)). To run the test suite after installation, run `ng test`.

### Core Contributors
- [Alice Post](https://github.com/ap2322)

### Process
This project was built as a first foray into using the MongoDB, Express, Angular, and Nodejs (MEAN) stack. Issues and progress was tracked on the Github Project Board: https://github.com/users/ap2322/projects/2. When approaching this project, a stronger skillset in Node and Express meant this was built with a back-end first, with test-driven development. Since Angular was a new framework, the primary goal was simply functionality. 

Some of the larger struggle points of this project included learning how to interact with MongoDB on the backend and the flow of information through the Angular framework. After overcoming conceptual hurdles around Angular Observables, the basic functionality of the application came together. One area of improvement on the Angular front end is to include more robust testing.

Big wins of this challenge were learning new technologies and implementing them in a functional application! 
