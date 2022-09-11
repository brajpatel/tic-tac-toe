//  toggle game theme
const toggleTheme = (() => {
    const body = document.querySelector('body');
    const changeTheme = document.getElementById('change-theme-btn');
    changeTheme.addEventListener('click', () => {
        body.classList.toggle('color');
    })
})();

// create players
const createPlayer = (name, marker) => {
    return {
        name,
        marker
    }
};

// gameboard
const gameBoard = (() => {
    const grid = document.getElementById('grid');
    let board = [];

    for(let i = 0; i < 9; i++) {
        board.push(i);
    }

    board.forEach(() => {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square)
    })
})();

// game
const game = (() => {
    // display game messages
    const gameMessage = document.getElementById('game-message')
    const subText = document.getElementById('subtext')

    // create players
    const playerOne = createPlayer('Player One', 'player1');
    const playerTwo = createPlayer('Player Two', 'player2');

    // game starting point
    let availableSpots = 9;
    let num = Math.floor(Math.random() * 2);
    let activePlayer = num === 0 ? playerOne : playerTwo;
    let gameWon = false;

    // all possible wins
    const possibleWins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    // check for a win
    function checkWin() {

    }

    // alert current player's turn
    function alertPlayer() {

    }

    // change turn to next player
    function nextPlayer() {

    }

    // declare tie of nobody wins
    function declareTie() {

    }

    return {
        alertPlayer,
        nextPlayer,
        declareTie
    }
})();