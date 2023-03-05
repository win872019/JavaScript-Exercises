var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

/* 
var ship1 = { locations: ["10", "20" ,"30"], hits: ["", "", ""] };
var ship2 = { locations: ["32", "33" ,"34"], hits: ["", "", ""] };
var ship3 = { locations: ["63", "64" ,"65"], hits: ["", "", "hit"] };

var ships = [{ locations: ["10", "20" ,"30"], hits: ["", "", ""] },
             { locations: ["32", "33" ,"34"], hits: ["", "", ""] },
             { locations: ["63", "64" ,"65"], hits: ["", "", "hit"] }]; 
*/

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    /*
    ships: [{ locations: ["06", "16" ,"26"], hits: ["", "", ""] },
            { locations: ["24", "34" ,"44"], hits: ["", "", ""] },
            { locations: ["10", "11" ,"12"], hits: ["", "", ""] }],
    */

    ships: [
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] }
    ],

    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];

            //var loacations = ship.locations;

            var index = ship.locations.indexOf(guess);
            if (ship.hits[index] === "hit") {
				view.displayMessage("Oops, you already hit that location!");
                return true;
            } else if (index >=0 ) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");

                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },
    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
            return false;
            }
        }
        return true;
    },

    generateShipLocations: function() {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ship[i].locations = locations;
            }
            console.log("Ships array: ");
		    console.log(this.ships);
    },

    generateShip: function() {
        var direction = Math.floor(Math.random() * 2);
        var row,col;

        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
        }

        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },
    collision: function(locations) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            for (var j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
};

var controller = {
    guesses: 0,
    processGuess: function(guess) {
        var loacation = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(loacation);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }
        }
    // no return value here, it wll return undefined.
    }
};

    function parseGuess(guess) {
        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

        if (guess === null || guess.length !== 2) {
            alert("Oops, please enter a letter and a number on the board.");
        } else {
            firstChar = guess.charAt(0);
            var row = alphabet.indexOf(firstChar);
            var column = guess.charAt(1);

            if(isNaN(row) || isNaN(column)) {
                alert("Oops,that isn't on the board.");
            } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
                alert("Oops, that's off the board!");
            } else {
                return row + column;
            }
        }
        return null;
    }


function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress; 

    model.generateShipLocations();
};

function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
};

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = "";
};

window.onload = init;




/*
view.diplayMiss("00");
view.displayHit("34");
view.diplayMiss("55");
view.displayHit("12");
view.diplayMiss("25");
view.displayHit("26");

view.displayMessage("Tap tap, is this thing on?");
*/

/*
console.log(controller.parseGuess("A0"));
console.log(controller.parseGuess("B6"));
console.log(controller.parseGuess("G3"));
console.log(controller.parseGuess("H0"));
console.log(controller.parseGuess("A7"));
*/
