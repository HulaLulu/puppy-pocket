

let score = 0

let clicker = document.getElementById("clicker")

let scoreDisplay = document.getElementById("scoreDisplay")


 import { howl, howler } from "howler"

 import soundEffectSrc from './assets/click.mp3'

 import backgroundMusicSrc from './assets/background-music.mp3'

 import LevelUpSrc from './assets/purchase.mp3'

const purchaseSound = new Howl({
  src: [LevelUpSrc],
  volume: 0.3
})

const soundEffectOne = new Howl({
  src: [soundEffectSrc],
  volume: 0.3
})

const backgroundMusic = new Howl({
  src: [backgroundMusicSrc],
  autoplay: true,
  loop: true,
  volume: 0.3
})

const formatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2,
  notation:'compact',
  compactDisplay: 'short'
})

function updateScore (amount) {
  score += amount
  scoreDisplay.innerText = score.toFixed(0) + '   PawPrints'
}

clicker.addEventListener("click", function() {
  let clickAmt = 1 + (evas ** 1.05)

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
  if (score >= 2500) {
    updateScore(-2500)
    georges++
    upgradeTwoCount.innerText = georges + '   georges'
  } else {
    alert('Not Enough PawPrints!')
  }

})



function gameLoop() {
  let clickAmt = (evas ** 1.05)

    updateScore(clickAmt)
}

setInterval(gameLoop, 1000)

