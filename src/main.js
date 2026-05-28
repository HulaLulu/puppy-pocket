let score = 0

let clicker = document.getElementById("clicker")

let scoreDisplay = document.getElementById("scoreDisplay")

function updateScore (amount) {
  score += amount
  scoreDisplay.innerText = score + '   PawPrints'
}

clicker.addEventListener("click", function() {
  let clickAmt = 1 + (evas ** 3.05)

  updateScore(clickAmt)
})

let upgradeOne = document.getElementById("upgradeOne")
let upgradeOneCount = document.getElementById("upgradeOneCount")
let evas = 0

upgradeOne.addEventListener("click", function() {
  if (score >= 100) {
    updateScore(-100)
    evas++
    upgradeOneCount.innerText = evas + '   evas'
  } else {
    alert('Not Enough PawPrints!')
  }

let upgradeTwo = document.getElementById("upgradeTwo")
let upgradeTwoCount = document.getElementById("upgradeTwoCount")
let georges = 0
})

upgradeTwo.addEventListener("click", function() {
  if (score >= 4000) {
    updateScore(-4000)
    georges++
    upgradeTwoCount.innerText = georges + '   georges'
  } else {
    alert('Not Enough PawPrints!')
  }

})

