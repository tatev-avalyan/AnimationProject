let div = document.getElementById('myDiv')

const w = window.innerWidth
const h = window.innerHeight
const divWidth = parseInt(div.style.width)
const divHeight = parseInt(div.style.height)
let divleft = parseInt(div.style.left)
let divTop = parseInt(div.style.top)
let left = true
let top = true


// document.addEventListener('mousedown',  function () {

//   document.addEventListener('mousemove', function onMouseMove(event) {

//     div.style.left = event.clientX - divWidth / 2 + 'px'
//     div.style.top = event.clientY - divHeight / 2 + 'px'

//     // document.addEventListener('mouseup')
//   })
// })

div.addEventListener('mousedown', onMouseDown)

function onMouseDown() {
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
}

function onMouseUp() {
  document.removeEventListener('mousemove', onMouseMove)
}

function onMouseMove() {
  div.style.left = event.clientX - divWidth / 2 + 'px'
  div.style.top = event.clientY - divHeight / 2 + 'px'
}



function moveDiv() {

  if (divleft >= w - divWidth) left = false;
  if (divleft <= 0) left = true;

  if (left) {
    divleft += 5
    div.style.left = divleft + "px";
  } else {
    divleft -= 5
    div.style.left = divleft + "px"
  }

  if (divTop >= h - divHeight) top = false;
  if (divTop <= 0) top = true;

  if (top) {
    divTop += 5
    div.style.top = divTop + 'px'
  } else {
    divTop -= 5
    div.style.top = divTop + 'px'
  }

  requestAnimationFrame(moveDiv)
}
