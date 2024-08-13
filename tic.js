// Add click event listener to each game square
var buttons = document.querySelectorAll('.game-square');
var gameheading = document.querySelector('#game-heading');
var restartbutton = document.querySelector('#restart-button');

let turn = 1;

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (turn % 2 == 0) {
            button.innerText = "O";
            gameheading.innerText = "Player One's turn";
        } else {
            button.innerText = "X";
            gameheading.innerText = "Player Two's turn";
        }
        button.style.color = 'orange';
        button.disabled = true;
        turn++;
        
        if (checkWin()) {
            gameheading.innerText = turn % 2 === 0 ? "Player One Wins!" : "Player Two Wins!";
            gameheading.style.color = "white";
            disableBoard();
            restartbutton.style.display = "block";
        } else if (turn === 10) {
            gameheading.innerText = "Game Draw";
            restartbutton.style.display = "block";
        }
    });
});

function checkWin() {
    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winCombinations.some(combination => {
        const [a, b, c] = combination;
        return buttons[a].innerText && buttons[a].innerText === buttons[b].innerText && buttons[a].innerText === buttons[c].innerText;
    });
}

function disableBoard() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

restartbutton.onclick = function() {
    buttons.forEach(function(button) {
        button.innerText = '';
        button.disabled = false;
    });
    gameheading.innerText = "Player One's turn";
    gameheading.style.color = "orange";
    restartbutton.style.display = "none";
    turn = 1;
};
