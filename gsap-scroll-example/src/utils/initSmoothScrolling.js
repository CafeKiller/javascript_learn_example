import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const initSmoothScrolling = () => {
    // 平滑滚动动画插件
    const lenis = new Lenis({
        lerp: 0.1, // 值越小, 平滑效果越明显
        smoothWheel: true, // 为鼠标滚轮启用平滑滚动
    })

    // 每次用户滚动时更新 ScrollTrigger
    lenis.on('scroll', () => ScrollTrigger.update())

    // 每帧动画执行
    const scrollFn = time => {
        lenis.raf(time) // lenis 中 requestAnimationFrame 方法
        requestAnimationFrame(scrollFn)
    }
    
    // 启动动画帧
    requestAnimationFrame(scrollFn)
}