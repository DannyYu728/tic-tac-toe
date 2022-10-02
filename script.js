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
        }
      } else {
        if (map.get(`${location}`) == 0) {
          map.set(`${location}`, 2)
          box.style.backgroundColor = "blue"
          turn++
        }
      }
    }))
  })
}
boxMaker(grid)




