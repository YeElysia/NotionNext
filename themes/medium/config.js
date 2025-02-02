const CONFIG = {
  // Style
  MEDIUM_RIGHT_PANEL_DARK: process.env.NEXT_PUBLIC_MEDIUM_RIGHT_DARK || false, // 右侧面板深色模式

  MEDIUM_POST_LIST_COVER: true, // 文章列表显示图片封面
  MEDIUM_POST_LIST_PREVIEW: true, // 列表显示文章预览
  MEDIUM_POST_LIST_CATEGORY: true, // 列表显示文章分类
  MEDIUM_POST_LIST_TAG: true, // 列表显示文章标签

  MEDIUM_POST_DETAIL_CATEGORY: true, // 文章显示分类
  MEDIUM_POST_DETAIL_TAG: true, // 文章显示标签

  // 菜单
  MEDIUM_MENU_CATEGORY: true, // 显示分类
  MEDIUM_MENU_TAG: false, // 显示标签
  MEDIUM_MENU_ARCHIVE: true, // 显示归档
  MEDIUM_MENU_SEARCH: false, // 显示搜索

  // Widget
  MEDIUM_WIDGET_REVOLVER_MAPS:
    process.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS || 'false', // 地图插件
  MEDIUM_WIDGET_TO_TOP: true, // 跳回顶部

  HEXO_WIDGET_ANALYTICS: false, // 显示统计卡

  HEO_NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://www.elysium-everlasting.com' },
    { title: '访问文档中心获取更多帮助', url: 'https://www.elysium-everlasting.cn/about' }
  ],

  HEO_HERO_CATEGORY_1: { title: '文章分类', url: '/category' },
  HEO_HERO_CATEGORY_2: { title: '请勿点击', url: '/' },
  HEO_HERO_CATEGORY_3: { title: '请勿点击', url: '/' },

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '永世乐土',
  HEO_HERO_TITLE_2: '花与鸟与箭',
  HEO_HERO_TITLE_3: 'version1.1',
  HEO_HERO_TITLE_4: '',
  HEO_HERO_TITLE_5: '',
  HEO_HERO_TITLE_LINK: 'lhttps://www.elysium-everlasting.cn/',

  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp',
      color_1: '#989bf8',
      title_2: 'Linux',
      img_2: 'https://raw.githubusercontent.com/YeElysia/Yee_Image/refs/heads/master/Icons/linux.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'Premiere Pro',
      img_1: 'https://raw.githubusercontent.com/YeElysia/Yee_Image/refs/heads/master/Icons/Pr.png',
      color_1: '#989bf8',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'CSS3',
      img_2: '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'C++',
      img_1: 'https://raw.githubusercontent.com/YeElysia/Yee_Image/refs/heads/master/Icons/cpp.png',
      color_1: '#ffffff',
      title_2: 'OpenCV',
      img_2: 'https://raw.githubusercontent.com/YeElysia/Yee_Image/refs/heads/master/Icons/opencv.png',
      color_2: '#2e3a41'
    }
  ],
}
export default CONFIG
