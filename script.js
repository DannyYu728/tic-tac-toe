let game = document.querySelector(".game")
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
let turn = 0

let winnerCheck = (map) => {
  if ((map.get("tL") === 1 && map.get("tM") === 1 && map.get("tR") === 1)
  || (map.get("mL") === 1 && map.get("mM") === 1 && map.get("mR") === 1)
  || (map.get("bL") === 1 && map.get("bM") === 1 && map.get("bR") === 1)
  || (map.get("tL") === 1 && map.get("mL") === 1 && map.get("bL") === 1)
  || (map.get("tM") === 1 && map.get("mM") === 1 && map.get("bM") === 1)
  || (map.get("tR") === 1 && map.get("mR") === 1 && map.get("bR") === 1)
  || (map.get("bL") === 1 && map.get("mM") === 1 && map.get("tR") === 1) ||
  (map.get("mM") === 1 && map.get("tL") === 1 && map.get("bR") === 1)) {
  console.log("Player 1 Wins")
  }
  else if ((map.get("tL") === 2 && map.get("tM") === 2 && map.get("tR") === 2)
  || (map.get("mL") === 2 && map.get("mM") === 2 && map.get("mR") === 2)
  || (map.get("bL") === 2 && map.get("bM") === 2 && map.get("bR") === 2)
  || (map.get("tL") === 2 && map.get("mL") === 2 && map.get("bL") === 2)
  || (map.get("tM") === 2 && map.get("mM") === 2 && map.get("bM") === 2)
  || (map.get("tR") === 2 && map.get("mR") === 2 && map.get("bR") === 2)
  || (map.get("bL") === 2 && map.get("mM") === 2 && map.get("tR") === 2) ||
  (map.get("mM") === 2 && map.get("tL") === 2 && map.get("bR") === 2)) {
  console.log("Player 2 Wins")
  }
}

let boxMaker = (map) => {
  map.forEach((i, location) => {
    let htmlTemplate = `
    <div class ="box ${location}">
    </div>`
    game.insertAdjacentHTML("beforeend", htmlTemplate)
    let boxes = document.querySelectorAll(`.${location}`)
    boxes.forEach((box) => box.addEventListener("click", function () {
      if (turn % 2 == 0) {
        if (map.get(`${location}`) == 0) {
          map.set(`${location}`, 1)
          box.style.backgroundColor = "red"
          turn++
          winnerCheck(map)
        }
      } else {
        if (map.get(`${location}`) == 0) {
          map.set(`${location}`, 2)
          box.style.backgroundColor = "blue"
          turn++
          winnerCheck(map)
        }
      }
    }))
  })
}
boxMaker(grid)



