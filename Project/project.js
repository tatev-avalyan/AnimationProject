let div = document.getElementsByTagName('div')

const small = div[0]
small.style.height = '150px'
small.style.width = '150px'
small.style.border = 'solid 1px lightblue'
small.style.borderRadius = '100px'
small.style.background = 'pink'
small.style.position = 'absolute'
small.style.left = '600px'
small.style.top = '540px'


document.addEventListener('mousemove', getMousePosition);
function getMousePosition(event) {
  small.style.left = event.clientX - 75 + 'px'
  small.style.top = event.clientY - 75 + 'px'
}
function animation() {

  const w = window.innerWidth;
  const h = window.innerHeight;
  let smallTop = parseInt(small.style.top)
  let smallLeft = parseInt(small.style.left)
  const smallWidth = parseInt(small.style.width)
  const smallHeight = parseInt(small.style.height)

  if (smallTop < 0){ 

  } else if(smallTop + smallHeight > h) {

  } else if( smallLeft < 0) {

  }else if (smallLeft + smallWidth > w) {
    
    // smallLeft += smallLeft * Math.sin(Math.random() * 90)
    // smallTop += smallTop * Math.sin(Math.random() * 90)
   

  } 
 // requestAnimationFrame(animation)

}
animation()
