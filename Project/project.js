let div = document.getElementById('myDiv')

const w = window.innerWidth
const h = window.innerHeight
const divWidth = parseInt(div.style.width)
const divHeight = parseInt(div.style.height)
let divleft = parseInt(div.style.left)
let divTop = parseInt(div.style.top)
let requestID;
let start = 0
let end = 0
let speed = 0
let road = 0

div.addEventListener('mousedown', onMouseDown)


const pt1 = { x: 0, y: 0 }
const pt2 = { x: 0, y: 0 }
let vel = { x: 0, y: 0 }




function onMouseDown(event) {
  cancelAnimationFrame(requestID);

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)

  pt1.x = event.clientX
  pt1.y = event.clientY
  pt2.x = event.clientX
  pt2.y = event.clientY
}


function onMouseMove(event) {

  div.style.left = event.clientX - divWidth / 2 + 'px'
  div.style.top = event.clientY - divHeight / 2 + 'px'

  pt1.x = pt2.x
  pt1.y = pt2.y

  pt2.x = event.clientX
  pt2.y = event.clientY

  start = Date.now()
  console.log('start = ' + start)
}

function onMouseUp(event) {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)

  divleft = event.clientX - divWidth / 2
  divTop = event.clientY - divHeight / 2

  let angle = getAngle(pt1, pt2)
  vel = getVelocityFromAngle(angle)
  update()
  end = Date.now()
  console.log('end = ' + end)
  speed = getSpeed()
  return pt2
}

function getAngle(pt1, pt2) {
  return Math.atan2((pt2.y - pt1.y), (pt2.x - pt1.x))
}

function getVelocityFromAngle(angle) {
  return { x: Math.cos(angle), y: Math.sin(angle) }
}

function getSpeed() {

  time = end - start;
  road = Math.sqrt(Math.pow((pt1.x - pt2.x), 2) + Math.pow((pt1.y - pt2.y), 2))
  const speed = road / time

  return speed
}


function update() {
  divleft += vel.x * speed
  divTop += vel.y * speed

  div.style.left = divleft + "px"
  div.style.top = divTop + "px"

  if (divleft > w - divWidth || divleft < 0) vel.x *= -1
  if (divTop > h - divHeight || divTop < 0) vel.y *= -1

  requestID = requestAnimationFrame(update)
}


