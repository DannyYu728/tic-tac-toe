let game = document.querySelector(".game")
let grid = new Map([
  ["topLeft", 0],
  ["topMid", 0],
  ["topRight", 0],
  ["midLeft", 0],
  ["midMid", 0],
  ["midRight", 0],
  ["botLeft", 0],
  ["botMid", 0],
  ["botRight", 0],
])
let turn = 1

let boxMaker = (map) => {
  map.forEach((status, location) => {
    let htmlTemplate = `
    <div class ="box ${location}">
    </div>`
    game.insertAdjacentHTML("beforeend", htmlTemplate)
    let boxes = document.querySelectorAll(`.${location}`)
    boxes.forEach((box) => box.addEventListener("click", function () {
      if (turn = even)
      
      if (map.get(`${location}`) == 0) {
        map.set(`${location}`, 1)
        box.style.backgroundColor = "red"
        console.log(map)
      } else {
        map.set(`${location}`, 0)
        box.style.backgroundColor = "blue"
        console.log(map)
      }
    }))
  })
}
boxMaker(grid)