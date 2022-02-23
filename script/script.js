//3) ROCK, PAPER AND SCISSOR
let title = document.querySelector('#title-el');
let result = document.querySelector('#result-el');
let gameBtn = document.querySelector('#game-btn');
let player1El = document.querySelector('#player1-el')
let player2El = document.querySelector('#player2-el')

title.textContent = "Rock, Paper  & Scissor"


let hands = ['Rock', 'Paper', 'Scissor']; //Hands.

let gameHand = random() //Selecting a random hand.

function random() { //Function to make a random hand.
    let randomHand = Math.floor(Math.random() * 3);
    return (hands[randomHand])
}

gameBtn.addEventListener('click', function() { // The Game
    let player1 = random();
    let player2 = random();
    
    if(player1 == 'Rock' && player2 == 'Paper') { //Conditions to win.
        player1El.textContent = 'Rock';
        player2El.textContent = 'Paper';
        result.textContent = `Player 2 wins!`
    }else if(player1 == 'Rock' && player2 == 'Scissor') {
        player1El.textContent = 'Rock';
        player2El.textContent = 'Scissor';
        result.textContent = `Player 1 wins!`
    }else if(player1 == 'Paper' && player2 == 'Scissor') {
        player1El.textContent = 'Paper';
        player2El.textContent = 'Scissor';
        result.textContent = `Player 2 wins!`
    }else if(player2 == 'Rock' && player1 == 'Paper') {
        player2El.textContent = 'Rock';
        player1El.textContent = 'Paper';
        result.textContent = `Player 1 wins!`
    }else if(player2 == 'Rock' && player1 == 'Scissor') {
        player2El.textContent = 'Rock';
        player1El.textContent = 'Scissor';
        result.textContent = `Player 2 wins!`
    }else if(player2 == 'Paper' && player1 == 'Scissor') {
        player2El.textContent = 'Paper';
        player1El.textContent = 'Scissor';
        result.textContent = `Player 1 wins!`
    }else if(player2 == 'Paper' && player1 == 'Paper') {
        player2El.textContent = 'Paper';
        player1El.textContent = 'Paper';
        result.textContent = `Draw!`
    }else if(player2 == 'Rock' && player1 == 'Rock') {
        player2El.textContent = 'Rock';
        player1El.textContent = 'Rock';
        result.textContent = `Draw!`
    }else if(player2 == 'Scissor' && player1 == 'Scissor') {
        player2El.textContent = 'Scissor';
        player1El.textContent = 'Scissor';
        result.textContent = `Draw!`
    }else if(player2 == 'Paper' && player1 == 'Paper') {
        player1El.textContent = 'Paper';
        player2El.textContent = 'Paper';
        result.textContent = `Draw!`
    }else if(player2 == 'Rock' && player1 == 'Rock') {
        player1El.textContent = 'Rock';
        player2El.textContent = 'Rock';
        result.textContent = `Draw!`
    }else if(player2 == 'Scissor' && player1 == 'Scissor') {
        player1El.textContent = 'Scissor';
        player2El.textContent = 'Scissor';
        result.textContent = `Draw!`
    } 
})