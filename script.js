// vars for playerHand dealerHand
// func to deal to player - dealPlayer - incldue logic to stick if 21
// func to deal to dealer - dealDealer
// func to check win state - playerWin - include logic for if playerBust
// func to hit (twist) - 17 - 21

var playerHand;
var dealerHand;

function random(min, max) {
    // 0 + min = min
    // 9 + min = max
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// function to deal
function dealCards() {
    playerHand = random(4, 21);
    dealerHand = random(2, 11);
}

function playerHit() {
    playerHand = playerHand + random(2, 11);
}

function dealerHit() {
    dealerHand = dealerHand + random(2, 11);
}

// function to check if win or bust
function checkBust() {
    if (playerHand <= 21) {
        dealerBlackjack();
    } else if (playerHand > 21) {
        console.log("You Bust!")
    }
}

//function to compare hands to 21
function compareHands() {
    console.log("The Dealer's hand is " + dealerHand)
    var player21 = 21 - playerHand;
    var dealer21 = 21 - dealerHand;
    if (player21 < dealer21) {
        console.log("You Win!")
    } else if (player21 > dealer21) {
        console.log("You lost to the Dealer!")
    } else {
        console.log("You tied with the Dealer!")
    }
}

function dealerBlackjack() {
    while (dealerHand < 17) {
        dealerHit(); 
    }
    if (dealerHand > 21) {
        dealerHand = 0;
    } 
    compareHands();
}

function playBlackjack() {
    dealCards();
    console.log("Your starting hand is " + playerHand);
    var twist = true
    do {
        var twist = confirm("Would you like to twist?");
        console.log(twist);
        if (twist) {
            playerHit();
            console.log("Your new hand is " + playerHand);
        } else if (!twist) {
            console.log("You stick on " + playerHand);
        }
        if (playerHand >= 21) {
            twist = false
        }    
    } while (twist)
    checkBust();
}
    
  
playBlackjack();










