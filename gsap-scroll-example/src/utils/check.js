export const supportsCssVars = function() {

    /**
     * 设置页面支持 JavaScript 的标志：
     * document.documentElement.className = 'js' 将网页的根元素的 className 属性设置为 'js'，
     * 这通常用于标识页面已加载 JavaScript，
     * 以便在 CSS 中可以根据是否支持 JavaScript 来应用不同的样式
    */
    document.documentElement.className = 'js'

    // temp储存元素用于动态添加 CSS 规则
    let _html =  document.createElement('style')
    _html.innerHTML = 'root: {--tmp-var: bold;}'
    document.head.append(_html)
    
    // isSupport储存是否支持（boolean） 判断window.CSS是否支持这个css规则并转化为boolean (!!)
    const isSupport = !!(
        window.CSS &&
        window.CSS.supports &&
        window.CSS.supports('font-weight','var(--tmp-var)')
    )
    _html.parentNode.removeChild(_html)
    return isSupport
}