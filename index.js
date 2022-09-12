//  toggle game theme
const toggleTheme = (() => {
    const body = document.querySelector('body');
    const changeTheme = document.getElementById('change-theme-btn');

    changeTheme.addEventListener('click', () => {
        body.classList.toggle('color');
    });
})();

// create players
const createPlayer = (name, marker) => {
    return {
        name,
        marker
    };
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
        grid.appendChild(square);
    });

    Array.from(grid.children).forEach((square, index) => {
        square.addEventListener('click', () => {
            // add player marker to the board
            square.classList.add(game.activePlayer.marker);

            // replace corresponding array index with player marker
            board[index] = game.activePlayer.marker;

            // make a selected square unselectable
            square.style.pointerEvents = 'none';

            // keep track of number of available spots on the board
            game.availableSpots -= 1;

            // check for a win after each move is made
            game.checkWin();

            // if the game has not been won yet
            if(game.gameWon === false) {
                // alert the next player to take their turn
                if(game.availableSpots > 0) {
                    game.alertPlayer();
                    game.nextPlayer();
                }
                // declare a tie if no moves are available
                else if(game.availableSpots === 0) {
                    game.declareTie();
                }
            }
        })
    });

    return { board }
})();

// game
const game = (() => {
    // display game messages
    const gameMessage = document.getElementById('game-message');
    const subText = document.getElementById('subtext');

    // create players
    const playerOne = createPlayer('Player One', 'player1');
    const playerTwo = createPlayer('Player Two', 'player2');

    // game starting point
    let availableSpots = 9;
    let num = Math.floor(Math.random() * 2);
    let activePlayer = num === 0 ? playerOne : playerTwo;
    let gameWon = false;

    subText.textContent = activePlayer.name;

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
    ];

    // check for a win
    function checkWin() {
        possibleWins.forEach((index) => {
            if(gameBoard.board[index[0]] === this.activePlayer.marker &&
                gameBoard.board[index[1]] === this.activePlayer.marker &&
                gameBoard.board[index[2]] === this.activePlayer.marker) {
                    gameMessage.textContent = `${this.activePlayer.name} wins!`
                    gameMessage.style.fontSize = '2rem';
                    gameMessage.style.color = 'rgb(0, 220, 110)';
                    this.gameWon = true;
                }
        })
    };

    // alert current player's turn
    function alertPlayer() {
        this.activePlayer === playerOne ? subText.textContent = playerTwo.name : subText.textContent = playerOne.name;
    };

    // change turn to next player
    function nextPlayer() {
        this.activePlayer === playerOne ? this.activePlayer = playerTwo : this.activePlayer = playerOne;
    };

    // declare tie of nobody wins
    function declareTie() {
        gameMessage.textContent = 'This game was a tie!';
        gameMessage.style.fontSize = '2rem';
        gameMessage.style.color = 'rgb(0, 155, 210)';
    };

    return {
        availableSpots,
        activePlayer,
        gameWon,
        checkWin,
        alertPlayer,
        nextPlayer,
        declareTie
    };
})();

// restart game button
const restartGame = (() => {
    const restartGameBtn = document.getElementById('restart-game-btn')

    restartGameBtn.addEventListener('click', () => {
        window.location.reload();
    });
})();
