// added radius to bounce 
const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight


let ctx = canvas.getContext('2d')

let x = 100
let speed_x = 3
let radius = 50
function CircleAnim(){
    requestAnimationFrame(CircleAnim)
    ctx.clearRect(0,0,window.innerWidth, window.innerHeight)
    
    ctx.beginPath()
    ctx.arc(x,200,radius,0, 2*Math.PI, false)
    ctx.strokeStyle = 'blue'
    ctx.fillStyle = 'green'
    ctx.stroke()
    ctx.fill()
    x+= speed_x


    if(x + radius > window.innerWidth || x - radius < 0){
        speed_x *= -1
    }
}

CircleAnim()