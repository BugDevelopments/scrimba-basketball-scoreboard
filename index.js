let homeScore = 0
let guestScore = 0
let homeboardEl = document.getElementById("homeboard")
let guestboardEl = document.getElementById("guestboard")

function increaseHome(n) {
    homeScore += n
    homeboardEl.innerText = homeScore    
}

function increaseGuest(n) {
    guestScore += n
    guestboardEl.innerText = guestScore
}

function resetGame() {
    homeScore=0
    guestScore=0
    homeboardEl.innerText = homeScore    
    guestboardEl.innerText = guestScore
}