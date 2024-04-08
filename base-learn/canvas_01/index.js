class Position {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

const H_STEP = 70 // 人物宽度像素, 用户素材处理
const V_STEP = 92 // 人物高度像素, 用于素材处理
const MOVE_STEP = 10 // 每帧移动距离
const TIMESTAMP_THRESHOLD = 80 // 时差阈值
const FRAMES_LENGTH = 8

const canvas = document.querySelector('#canvasCont')
const ctx = canvas.getContext('2d')

const image = new Image()
image.src = 'walking.jpeg'

let index = 0 // 计数,每渲染一次 +1
let lastTime = 0
let currentPost = new Position(0, 0) // 当前位置
let targerPost = new Position(0, 0) // 目标位置
let angle = 0
let movingAngleType = 2 // 移动时角度类型
let xMoveStep // x轴每次移动距离
let yMoveStep // y轴每次移动距离

image.onload = () => {
    window.requestAnimationFrame(walking)
}

/**
 * 将点击坐标转换为 canvas 容器内的坐标
 * */
function windowToCanvas(canvas, x, y) {
    console.log(x, y);
    // getBoundingClientRect link: https://juejin.cn/post/7046586981601509390
    let bbox = canvas.getBoundingClientRect()
    // 获取 canvas 元素身上的 CSS 样式
    let style = window.getComputedStyle(canvas)

    return {
        x: (x - bbox.left - parseInt(style.paddingLeft) - parseInt(style.borderLeft))
            * (canvas.width / parseInt(style.width)),
        y: (y - bbox.left - parseInt(style.paddingTop) - parseInt(style.borderTop))
            * (canvas.height / parseInt(style.height)),
    }
}

/**
 * 移动
 * */ 
function walking(timeStamp) {
    if (timeStamp - lastTime > TIMESTAMP_THRESHOLD) {
        timeStamp = lastTime
        if (Math.abs(targerPost.x - currentPost.x) > Math.abs(xMoveStep)) {
            currentPost.x += xMoveStep
        } else {
            currentPost.x = targerPost.x
        }

        if (Math.abs(targerPost.y - currentPost.y) > Math.abs(yMoveStep)) {
            currentPost.y += yMoveStep
        } else {
            currentPost.y = targerPost.y
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(image, H_STEP * (index++ % FRAMES_LENGTH), V_STEP * movingAngleType, H_STEP, V_STEP, currentPost.x, currentPost.y, H_STEP, V_STEP)
    }
    window.requestAnimationFrame(walking)
}

canvas.addEventListener('click', (e) => {
    const position = windowToCanvas(canvas, e.clientX, e.clientY)
    targerPost.x = position.x - H_STEP / 2
    targerPost.y = position.y - V_STEP / 2 

    angle = Math.asin((targerPost.y - currentPost.y) / Math.sqrt(Math.pow(targerPost.y - currentPost.y, 2)
            + Math.pow(targerPost.x - currentPost.x, 2)))

    if(targerPost.x < currentPost.x) angle = Math.PI - angle

    xMoveStep = MOVE_STEP * Math.cos(angle)
    yMoveStep = MOVE_STEP * Math.sin(angle)
    
    if(angle > -5 * Math.PI / 12 && angle < -Math.PI / 12) {
        movingAngleType = 7 // 右上
    } else if(angle >= -Math.PI / 12 && angle <= Math.PI / 12 ) {
        movingAngleType = 2 // 右
    } else if(angle > Math.PI / 12 && angle < 5 * Math.PI / 12) {
        movingAngleType = 5 // 右下
    } else if(angle >= 5 * Math.PI / 12 && angle <= 7 * Math.PI / 12) {
        movingAngleType = 0 // 下
    } else if(angle > 7 * Math.PI / 12 && angle  < 11 * Math.PI / 12) {
        movingAngleType = 4 // 左下
    } else if(angle >= 11 * Math.PI / 12 && angle <= 13 * Math.PI / 12) {
        movingAngleType = 1 // 左
    } else if(angle > 13 * Math.PI / 12 && angle < 17 * Math.PI / 12) {
        movingAngleType = 6 // 左上
    } else {
        movingAngleType = 3 // 上
    }
})


