// clear screen
const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight


let ctx = canvas.getContext('2d')

let x = 100
function CircleAnim(){
    requestAnimationFrame(CircleAnim)
    ctx.clearRect(0,0,window.innerWidth, window.innerHeight)
    
    ctx.beginPath()
    ctx.arc(x,200,50,0, 2*Math.PI, false)
    ctx.strokeStyle = 'blue'
    ctx.fillStyle = 'green'
    ctx.stroke()
    ctx.fill()
    x+= 1
}

CircleAnim()