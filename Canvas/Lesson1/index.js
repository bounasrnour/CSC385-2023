const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let ctx = canvas.getContext('2d')
// drawing
ctx.fillRect(100,100,100,100)

// line
ctx.beginPath()
ctx.moveTo(50,400)
ctx.lineTo(50,700)
ctx.stroke()


//line with color (ofc red)
ctx.beginPath()
ctx.moveTo(100,600)
ctx.lineTo(100,900)
ctx.strokeStyle = 'red'
ctx.stroke()


// rec with color again red
ctx.fillStyle = 'red'
ctx.fillRect(300,200,100,100)

// circle and ofc again it's red 
ctx.beginPath()
ctx.arc(400,400,30, 0,2 *Math.PI, false)
ctx.stroke()


ctx.beginPath()
ctx.arc(500,500,60,0, 2*Math.PI, false)
ctx.strokeStyle = 'blue'
ctx.stroke()


//multiple stuff
for(let i = 0; i< 10;i++){
    let x = Math.random() * window.innerWidth
    let y = Math.random() * window.innerHeight
    ctx.beginPath()
    ctx.arc(x,y,30, 0,2 *Math.PI, false)
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.stroke()
}