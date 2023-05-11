// random start pos
const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight


let ctx = canvas.getContext('2d')

let x = Math.random() * window.innerWidth
let speed_x = 5
let radius = 50
let y = Math.random() * window.innerHeight
let speed_y = 5
function CircleAnim(){
    requestAnimationFrame(CircleAnim)
    ctx.clearRect(0,0,window.innerWidth, window.innerHeight)
    
    ctx.beginPath()
    ctx.arc(x,y,radius,0, 2*Math.PI, false)
    ctx.strokeStyle = 'blue'
    ctx.fillStyle = 'green'
    ctx.stroke()
    ctx.fill()
    x+= speed_x
    y+= speed_y


    if(x + radius > window.innerWidth || x - radius < 0){
        speed_x *= -1
    }

    if(y + radius > window.innerHeight || y - radius < 0){
        speed_y *= -1
    }
}

CircleAnim()