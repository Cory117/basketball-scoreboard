// Home Score Card
let homeBtnOne = document.getElementById("home-btn-1")
let homeBtnTwo = document.getElementById("home-btn-2")
let homeBtnThree = document.getElementById("home-btn-3")
let homeScoreEl = document.getElementById("homeScore")
let homeScore = 0

function addOneHomeScore() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addTwoHomeScore() {
    homeScore += 2
    homeScoreEl.textContent =homeScore
}

function addThreeHomeScore() {
    homeScore += 3
    homeScoreEl.textContent =homeScore
}

// Guest Score Card
let guestBtnOne = document.getElementById("guest-btn-1")
let guestBtnTwo = document.getElementById("guest-btn-2")
let guestBtnThree = document.getElementById("guest-btn-3")
let guestScoreEl = document.getElementById("guestScore")
let guestScore = 0

function addOneGuestScore() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addTwoGuestScore() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addThreeGuestScore() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}