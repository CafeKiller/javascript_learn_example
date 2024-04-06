import {useEffect, useState} from "react"

function useImagePreloader() {
    const [images, setImages] = useState([])

    useEffect(() => {
        async function preloadImage() {
            // import.meta.globEager 动态导入文件
            const imageModels = import.meta.globEager('../assets/*.jpg')
            
            // 将模块路径转换为相对路径
            const imageSrcs = Object.values(imageModels).map(model => {
                // 获取模块路径
                const modelPath = model.default
                // 将路径中的 '..' 转换为 '.' 实现路径的转换
                return modelPath.replace(/\.\.\//g, './') 
            })

            // 创建 Image 对象, 并等待所有图片加载完成
            const imagePromises = imageSrcs.map(async imageUrl => {
                const image = new Image()
                image.src = imageUrl
                // decode() 异步解码图片
                await image.decode()
                return image
            })

            // 等待所有图片加载完成后, 设置状态以触发组件并重新渲染
            const loadedImage = await Promise.all(imagePromises)
            setImages(loadedImage)
        }

        // 调用预加载图片函数
        preloadImage()

    }, [])

    return images
}

export default useImagePreloader