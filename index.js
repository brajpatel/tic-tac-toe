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

    // make array length 9
    let board = [];
    for(let i = 0; i < 9; i++) {
        board.push(i);
    }

    // create and add squares to the gameboard
    board.forEach(() => {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square)
    })

    Array.from(grid.children).forEach((square, index) => {
        square.addEventListener('click', () => {
            square.classList.add(game.activePlayer.marker);
            square.setAttribute('data', game.activePlayer.marker);

            board[index] = game.activePlayer.marker;

            square.style.pointerEvents = 'none';

            game.availableSpots -= 1;

            game.checkWin();

            if(game.gameWon === false) {
                if(game.availableSpots > 0) {

                }
                else {
                    game.declareTie();
                }
            }
        });
    });
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
        possibleWins.forEach((item) => {
            
        })
    }

    // alert current player's turn
    function alertPlayer() {

    }

    // change turn to next player
    function nextPlayer() {

    }

    // declare tie of nobody wins
    function declareTie() {
        gameMessage.textContent = 'This game was a tie!'
    }

    return {
        alertPlayer,
        nextPlayer,
        declareTie
    }
})();