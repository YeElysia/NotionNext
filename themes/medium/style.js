/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      // 主题色
      @theme {
        --color-valya-qing: #00ffdc;
        --color-valya-lan: #3097e8;
      }

      // 底色
      .dark body {
        background-color: black;
      }

      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      /*  菜单下划线动画 */
      #theme-medium .menu-link {
        text-decoration: none;
        background-image: linear-gradient(#928cee, #928cee);
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
      }

      #theme-medium .menu-link:hover {
        background-size: 100% 2px;
        color: #928cee;
      }

      /* 设置了从上到下的渐变黑色 */
      #theme-medium .header-cover::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.2) 10%,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 0.2) 75%,
          rgba(0, 0, 0, 0.5) 100%
        );
      }

      /* Custem */
      .tk-footer {
        opacity: 0;
      }

      // 选中字体颜色
      ::selection {
        background: rgba(45, 170, 219, 0.3);
      }

      // 自定义滚动条
      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #49b1f5;
      }

      * {
        scrollbar-width: thin;
        scrollbar-color: #49b1f5 transparent;
      }

      @keyframes moveBlack {
        0% {
          animation-timing-function: ease-in;
        }
        25% {
          transform: translate3d(0, 100%, 0.625rem);
          animation-timing-function: ease-out;
        }
        50% {
          transform: translate3d(0, 200%, 0);
          animation-timing-function: ease-in;
        }
        75% {
          transform: translate3d(0, 100%, -0.625rem);
          animation-timing-function: ease-out;
        }
      }

      @keyframes moveWhite {
        0% {
          animation-timing-function: ease-in;
          transform: rotateX(-13deg) rotateY(360deg);
        }
        25% {
          transform: translate3d(0, -100%, -0.625rem);
          animation-timing-function: ease-out;
        }
        50% {
          transform: translate3d(0, -200%, 0);
          animation-timing-function: ease-in;
        }
        75% {
          transform: translate3d(0, -100%, 0.625rem);
          animation-timing-function: ease-out;
        }
        100% {
          transform: rotateX(-13deg) rotateY(0deg);
        }
      }

      @keyframes moveY {
        0% {
          transform: rotateX(0deg) rotateY(0deg);
        }
        100% {
          transform: rotateX(0deg) rotateY(360deg);
        }
      }

      @keyframes moveX {
        0% {
          transform: rotateX(0deg) rotateY(0deg);
        }
        100% {
          transform: rotateX(360deg) rotateY(0deg);
        }
      }

      .outdiv {
        position: absolute;
        left: 50%;
        top: 50%;
        transform-style: preserve-3d;
        animation: moveY 5s linear infinite;
      }
        
      .indiv {
        position: absolute;
        left: 50%;
        top: 50%;
        transform-style: preserve-3d;
        animation: moveX 4s linear infinite;
      }

      .dot {
        --rotate-angle: 0deg;
        position: absolute;
        width: 0.625rem;
        height: 0.625rem;
        perspective: 4000rem;
        transform-style: preserve-3d;
        &.out {
          transform: rotate(var(--rotate-angle)) translateY(-200px);
        }

        &.in {
          transform: rotate(var(--rotate-angle)) translateY(-100px);
          animation-delay: 1000ms;
        }
      }
      .dot::before,
      .dot::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      .out::before {
        background: #3097e8;
        top: -100%;
        animation: moveBlack 2000ms infinite;
      }
      .out::after {
        background: #00ffdc;
        top: 100%;
        animation: moveWhite 2000ms infinite;
      }
      .in::before {
        background: #f57600;
        top: -100%;
        animation: moveBlack 2000ms infinite;
      }
      .in::after {
        background: #f5a623;
        top: 100%;
        animation: moveWhite 2000ms infinite;
      }
      .dot:nth-child(6n + 1) {
        &::before,
        &::after {
          animation-delay: -333.333ms;
        }
      }
      .dot:nth-child(6n + 2) {
        &::before,
        &::after {
          animation-delay: -666.666ms;
        }
      }
      .dot:nth-child(6n + 3) {
        &::before,
        &::after {
          animation-delay: -999.999ms;
        }
      }
      .dot:nth-child(6n + 4) {
        &::before,
        &::after {
          animation-delay: -1333.332ms;
        }
      }
      .dot:nth-child(6n + 5) {
        &::before,
        &::after {
          animation-delay: -1666.665ms;
        }
      }
      .dot:nth-child(6n + 6) {
        &::before,
        &::after {
          animation-delay: -1999.998ms;
        }
      }
    `}</style>
  )
}

export { Style }
