//  toggle game theme
const toggleTheme = (() => {
    const body = document.querySelector('body')
    const changeTheme = document.getElementById('change-theme-btn')
    changeTheme.addEventListener('click', () => {
        body.classList.toggle('color')
    })
})();

// create players
const createPlayer = (name, marker) => {
    return {
        name,
        marker
    }
}

// gameboard
const gameBoard = (() => {

})();

// game
const game = (() => {

})();