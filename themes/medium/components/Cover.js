import { useEffect, useState } from 'react'

const LoadingCover = ({ onFinishLoading }) => {
  const [isVisible, setIsVisible] = useState(true)
  // 定义颜色变量
  const colors = {
    backgroundcolor: 'rgba(255, 255, 255, 0.5)',
    rippleColor: 'rgba(111, 111, 256, 0.6)' // 半透明白色
  }

  useEffect(() => {
    const pageContainer = document.getElementById('pageContainer')

    const handleClick = e => {
      // 创建扩散光圈
      const ripple = document.createElement('div')
      ripple.classList.add('ripple')
      ripple.style.left = `${e.clientX - 10}px`
      ripple.style.top = `${e.clientY - 10}px`
      document.body.appendChild(ripple)

      // 添加页面缩放 + 模糊动画
      pageContainer?.classList?.add('page-clicked')

      // 模拟加载完成，调用回调函数
      setTimeout(() => {
        setIsVisible(false) // 淡出动画
        setTimeout(() => {
          if (onFinishLoading) {
            onFinishLoading()
          }
        }, 600) // 等待淡出动画完成
      }, 2000)

      // 清理 ripple 元素
      setTimeout(() => {
        ripple.remove()
      }, 1000)
    }

    document.body.addEventListener('click', handleClick)

    return () => {
      document.body.removeEventListener('click', handleClick)
    }
  }, [onFinishLoading])

  const dots_out = Array.from({ length: 60 }, (_, index) => {
    const rotateAngle = (index + 1) * 6
    return (
      <div
        key={index}
        className='dot out'
        style={{ '--rotate-angle': `${rotateAngle}deg` }}></div>
    )
  })
  const dots_in = Array.from({ length: 30 }, (_, index) => {
    const rotateAngle = (index + 1) * 12
    return (
      <div
        key={index}
        className='dot in'
        style={{ '--rotate-angle': `${rotateAngle}deg` }}></div>
    )
  })

  if (!isVisible) return null

  return (
    <div
      className='cover w-full h-full relative justify-center content-center'
      id='pageContainer'>
      <div className='cover-content z-10000'>
        <div className='w-full h-full relative justify-center content-center my-5 p-5 translate-y-[200px]'>
          <div className='loading w-full relative m-6 text-center text-xl flex flex-col animate-[spin_6.3s_linear_infinite]'>
            <div className='outdiv '>{dots_out}</div>
            <div className='indiv'>{dots_in}</div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          body {
            margin: 0;
            overflow: hidden;
            cursor: pointer;
          }

          .cover {
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            pointer-events: auto;
            background-size: 300% 300%;
            transition: all 4s cubic-bezier(0.4, 0, 0.2, 1.5); /* 淡出动画 */
          }

          .cover-content {
            z-index: 10000;
            width: 100vh;
            background: ${colors.backgroundcolor}
          }
          .cover.page-clicked {
            opacity: 0;
            transform: scale(1.5); /* 放大到1.5倍 */
            pointer-events: none;
          }

          .ripple {
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(
              ${colors.rippleColor} 0%,
              transparent 70%
            );
            pointer-events: none;
            width: 20px;
            height: 20px;
            transform: scale(0);
            opacity: 0.8;
            z-index: 10;
            animation: rippleExpand 1s ease-out forwards;
          }

          /* 扩散光圈动画 */
          @keyframes rippleExpand {
            to {
              transform: scale(40);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  )
}

export default LoadingCover
