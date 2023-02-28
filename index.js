const homeScoreEl = document.getElementById('home-score-el')
const guestScoreEl = document.getElementById('guest-score-el')
let homeScore = 0
let guestScore = 0
updateScore()

function updateScore() {
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}

function homeIncrease(value) {
    homeScore += value
    updateScore()
}

function guestIncrease(value) {
    guestScore += value
    updateScore()
}

function newGame() {
    homeScore = 0
    guestScore = 0
    updateScore()
}
