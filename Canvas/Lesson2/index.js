// normal circle
const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight


let ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.arc(200,200,50,0, 2*Math.PI, false)
ctx.strokeStyle = 'blue'
ctx.fillStyle = 'green'
ctx.stroke()
ctx.fill()

function CircleAnim(){
    requestAnimationFrame(CircleAnim)
    
}
