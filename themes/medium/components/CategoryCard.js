import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import CONFIG from '../config'

// 文章分类卡片

//随机图标
const randomIcon = () => {
  const icons = [
    'fa-solid fa-fire-flame-curved',
    'fa-solid fa-flask',
    'fa-solid fa-flask-vial',
    'fa-solid fa-atom',
    'fa-solid fa-bolt',
    'fa-solid fa-bug',
    'fa-solid fa-brain',
    'fa-solid fa-chess-knight',
    'fa-solid fa-cloud',
    'fa-solid fa-code',
    'fa-solid fa-cube',
    'fa-solid fa-database',
    'fa-solid fa-dragon',
    'fa-solid fa-eye',
    'fa-solid fa-feather',
    'fa-solid fa-fingerprint',
    'fa-solid fa-gem',
    'fa-solid fa-ghost',
    'fa-solid fa-heart',
    'fa-solid fa-key',
    'fa-solid fa-lightbulb',
    'fa-solid fa-magnet',
    'fa-solid fa-microchip',
    'fa-solid fa-moon',
    'fa-solid fa-mountain',
    'fa-solid fa-paint-brush',
    'fa-solid fa-robot',
    'fa-solid fa-rocket',
    'fa-solid fa-scroll',
    'fa-solid fa-skull',
    'fa-solid fa-star',
    'fa-solid fa-tree',
    'fa-solid fa-virus',
    'fa-solid fa-water',
    'fa-solid fa-wrench',
  ]
  return icons[Math.floor(Math.random() * icons.length)]
}


const CategoryCard = ({ category }) => {
  return (
    <Link
    href={`/category/${category.slug}`}
    className='group relative overflow-hidden bg-gradient-to-r from-teal-400 to-cyan-400 flex h-40 justify-start items-center text-white rounded-xl xl:hover:w-1/3 xl:w-1/4 transition-all duration-500 ease-in m-4 '>
    <div className='font-bold lg:text-xl  pl-5 relative -mt-2 duration-700 ease-in-out transition-all group-hover:scale-[1.5] group-hover:translate-x-5 group-hover:rotate-60'>
      <span>{category.name}</span>
      <span className='absolute -bottom-0.5 left-5 w-5 h-0.5 bg-white rounded-full'></span>
    </div>
    <div className='hidden lg:block absolute right-6 duration-700 ease-in-out transition-all scale-[2] translate-y-6 rotate-12 opacity-20 group-hover:opacity-80 group-hover:scale-100 group-hover:translate-y-0 group-hover:rotate-0'>
      <i className={`${randomIcon()} text-4xl`}></i>
    </div>
  </Link>
  )
}

export default CategoryCard
