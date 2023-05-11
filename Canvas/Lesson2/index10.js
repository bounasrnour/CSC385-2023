// random start pos
const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight


let ctx = canvas.getContext('2d')
let speedFactor  = 50
let maxRadius = 20
let numberOfCircles = 10

function CircleAnim(){
    for(let circle = 0; circle<numberOfCircles; circle++){
        requestAnimationFrame(CircleAnim)
        let x = Math.random() * window.innerWidth
        let speedX = (Math.random() - 0.5) * speedFactor
        let radius = Math.random() * maxRadius
        let y = Math.random() * window.innerHeight
        let speedY = (Math.random() - 0.5 ) * speedFactor
        drawCircle(x, y, speedX, speedY, radius)
    }
    ctx.clearRect(0,0,window.innerWidth, window.innerHeight)
    
    
}

function drawCircle(x, y, speedX, speedY, radius){
    ctx.beginPath()
    ctx.arc(x,y,radius,0, 2*Math.PI, false)
    ctx.strokeStyle = 'blue'
    ctx.fillStyle = 'green'
    ctx.stroke()
    ctx.fill()
    x+= speedX
    y+= speedY

    if(x + radius > window.innerWidth || x - radius < 0){
        speedX *= -1
    }

    if(y + radius > window.innerHeight || y - radius < 0){
        speedY *= -1
    }
}


CircleAnim()