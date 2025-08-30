
let timeLeft = 10;
let timerInterval = null;
let gameActive = false;

const clickBtn = document.getElementById('clickBtn');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const restartBtn = document.getElementById('restartBtn');

function startGame() {
    score = 0;
    timeLeft = 10;
    gameActive = true;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;

    clickBtn.disabled = false;
    restartBtn.disabled = true;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timerInterval);
    gameActive = false;
    clickBtn.disabled = true;
    restartBtn.disabled = false;
}

clickBtn.addEventListener('click', () => {
    if (!gameActive) return;
    score++;
    scoreDisplay.textContent = score;
});

restartBtn.addEventListener('click', startGame);

// Initialize game state
window.onload = () => {
    clickBtn.disabled = true;
    restartBtn.disabled = false;
    timerDisplay.textContent = timeLeft;
    scoreDisplay.textContent = score;
};

// Optionally start game on first click
restartBtn.disabled = false;