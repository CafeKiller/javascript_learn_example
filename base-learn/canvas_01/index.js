class Position {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

const H_STEP = 70
const V_STEP = 92
const MOVE_STEP = 10
const TIMESTAMP_THRESHOLD = 80
const FRAMES_LENGTH = 8

const canvas = document.querySelector('#canvasCont')
const ctx = canvas.getContext('2d')

const image = new Image()
image.src = 'walking.jpeg'

let lastTime = 0
let currentPost = new Position(0, 0)
let taggerPost = new Position(0, 0)
let angle = 0
let movingAngleType = 2
let xMoveStep
let yMoveStep

image.onload = () => {
    // window.requestAnimationFrame()
}

/**
 *
 * */
function windowToCanvas(canvas, x, y) {
    let bbox = canvas.getBoundingClientRect()
    let style = window.getComputedStyle(canvas)

    return {
        x: (x - bbox.left - parseInt(style.paddingLeft) - parseInt(style.borderLeft))
            * (canvas.width / parseInt(style.width)),
        y: (y - bbox.left - parseInt(style.paddingTop) - parseInt(style.borderTop))
            * (canvas.height / parseInt(style.height)),
    }
}




