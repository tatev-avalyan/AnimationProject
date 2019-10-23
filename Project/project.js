let div = document.getElementById('myDiv')

const w = window.innerWidth
const h = window.innerHeight
const divWidth = parseInt(div.style.width)
const divHeight = parseInt(div.style.height)
let divleft = parseInt(div.style.left)
let divTop = parseInt(div.style.top)
let left = true
let top = true


div.addEventListener('mousedown', onMouseDown)

function onMouseDown() {
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)

}

let pt2 = { x: 0, y: 0 }
function onMouseUp(event) {
  pt2 = {
    x: event.clientX,
    y: event.clientY
  }
  document.removeEventListener('mousemove', onMouseMove)
  console.log(pt2)
  update()
  return pt2
}

function onMouseMove() {
  div.style.left = event.clientX - divWidth / 2 + 'px'
  div.style.top = event.clientY - divHeight / 2 + 'px'

}

let pt1 = {
  x: divleft,
  y: divTop
}

function getAngle(pt1, pt2) {
  return Math.atan((pt2.y - pt1.y) / (pt2.x - pt1.x)) * (180 / Math.PI)
}


let velX = 0
let velY = 0
function getVelocityFromAngle(angle) {
  velX = Math.cos(angle)
  velY = Math.sin(angle)

  return { x: velX, y: velY }
}
//console.log(getAngle(pt1, pt2))

console.warn(getVelocityFromAngle(Math.PI/6))


function update() {

  if (divleft >= w - divWidth) left = false;
  if (divleft <= 0) left = true;

  if (left) {
    divleft += 15 * velX
    div.style.left = divleft + "px";
  } else {
    divleft -= 15 * velX
    div.style.left = divleft + "px"

  }

  if (divTop >= h - divHeight) top = false;
  if (divTop <= 0) top = true;

  if (top) {
    divTop += 15 * velY
    div.style.top = divTop + 'px'
  } else {
    divTop -= 15 * velY
    div.style.top = divTop + 'px'
  }

  requestAnimationFrame(update)

}


