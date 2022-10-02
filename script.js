let game = document.querySelector(".game")
let start = document.querySelector(".startButton")
let reset = document.querySelector(".resetGame")
let title = document.querySelector(".titleScreen")
let main = document.querySelector(".main")
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let play1Score = document.querySelector(".play1")
let play2Score = document.querySelector(".play2")
let playTurn = document.querySelector("h3")
let annouce = document.querySelector("h4")
let turn = 0
let round = 0
let player1Score = 0
let player2Score = 0
let grid = new Map([
  ["tL", 0],
  ["tM", 0],
  ["tR", 0],
  ["mL", 0],
  ["mM", 0],
  ["mR", 0],
  ["bL", 0],
  ["bM", 0],
  ["bR", 0],
])

start.addEventListener("click", function () {
  game.innerHTML = ""
  boxMaker(grid)
  title.classList.add("hidden")
  main.classList.remove("hidden")
})

reset.addEventListener("click", function () {
  turn = 0
  round = 0
  player1Score = 0
  player2Score = 0
  play1Score.innerText = player1Score
  play2Score.innerText = player2Score
  game.innerHTML = ""
  boxMaker(grid)
  title.classList.remove("hidden")
  main.classList.add("hidden")
})

let nextRound = (map) => {
  map.forEach(function (i, location) {
    map.set(`${location}`, 0)
    game.innerHTML = ""
    annouce.innerText = ""
    // turn = 0
    round += 1
    boxMaker(map)
  })
}

let winnerCheck = (map) => {
  if ((map.get("tL") === 1 && map.get("tM") === 1 && map.get("tR") === 1)
    || (map.get("mL") === 1 && map.get("mM") === 1 && map.get("mR") === 1)
    || (map.get("bL") === 1 && map.get("bM") === 1 && map.get("bR") === 1)
    || (map.get("tL") === 1 && map.get("mL") === 1 && map.get("bL") === 1)
    || (map.get("tM") === 1 && map.get("mM") === 1 && map.get("bM") === 1)
    || (map.get("tR") === 1 && map.get("mR") === 1 && map.get("bR") === 1)
    || (map.get("bL") === 1 && map.get("mM") === 1 && map.get("tR") === 1) ||
    (map.get("mM") === 1 && map.get("tL") === 1 && map.get("bR") === 1)) {
    player1Score += 1
    play1Score.innerText = player1Score
    annouce.textContent = "Player 1 WINS!"
    setTimeout(nextRound, 1500, map)
  }
  else if ((map.get("tL") === 2 && map.get("tM") === 2 && map.get("tR") === 2)
    || (map.get("mL") === 2 && map.get("mM") === 2 && map.get("mR") === 2)
    || (map.get("bL") === 2 && map.get("bM") === 2 && map.get("bR") === 2)
    || (map.get("tL") === 2 && map.get("mL") === 2 && map.get("bL") === 2)
    || (map.get("tM") === 2 && map.get("mM") === 2 && map.get("bM") === 2)
    || (map.get("tR") === 2 && map.get("mR") === 2 && map.get("bR") === 2)
    || (map.get("bL") === 2 && map.get("mM") === 2 && map.get("tR") === 2) ||
    (map.get("mM") === 2 && map.get("tL") === 2 && map.get("bR") === 2)) {
    player2Score += 1
    play2Score.innerText = player2Score
    annouce.textContent = "Player 2 WINS!"
    setTimeout(nextRound, 1500, map)
  } else if ((map.get("tL") != 0 && map.get("tM") != 0 && map.get("tR") != 0 &&
    map.get("mL") != 0 && map.get("mM") != 0 && map.get("mR") != 0 &&
    map.get("bL") != 0 && map.get("bM") != 0 && map.get("bR") != 0)) {
    annouce.textContent = "TIE!"
    setTimeout(nextRound, 1500, map)
  }
}

let boxMaker = (map) => {
  if (turn % 2 == 0) {
    playTurn.innerText = "Reds Turn"
  } else {
    playTurn.innerText = "Blue Turn"
  }
  //Create the 3x3 Grid
  map.forEach((i, location) => {
    let htmlTemplate = `
    <div class ="box ${location}">
    </div>`
    game.insertAdjacentHTML("beforeend", htmlTemplate)
    //Make the box clickable
    let boxes = document.querySelectorAll(`.${location}`)
    boxes.forEach((box) => box.addEventListener("click", function () {
      if (turn % 2 == 0) {
        if (map.get(`${location}`) == 0) {
          map.set(`${location}`, 1)
          box.style.backgroundColor = "red"
          turn++
          playTurn.innerText = "Blue's Turn"
          winnerCheck(map)
        }
      } else {
        if (map.get(`${location}`) == 0) {
          map.set(`${location}`, 2)
          box.style.backgroundColor = "blue"
          turn++
          playTurn.innerText = "Red's Turn"
          winnerCheck(map)
        }
      }
    }))
  })
}






