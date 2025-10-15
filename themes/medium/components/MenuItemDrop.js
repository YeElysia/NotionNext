import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { useState } from 'react'
/**
 * 支持二级展开的菜单
 * @param {*} param0
 * @returns
 */
export const MenuItemDrop = ({ link }) => {
  const [show, changeShow] = useState(false)
  //   const show = true
  //   const changeShow = () => {}
  const router = useRouter()

  if (!link || !link.show) {
    return null
  }
  const hasSubMenu = link?.subMenus?.length > 0
  const selected = router.pathname === link.href || router.asPath === link.href

  return (
    <div
      onMouseOver={() => changeShow(true)}
      onMouseOut={() => changeShow(false)}>
      {/* {!hasSubMenu && (
        <SmartLink
          href={link?.href}
          target={link?.target}
          className=' menu-link pl-2 pr-4 no-underline tracking-widest pb-1'>
          {link?.icon && <i className={link?.icon} />} {link?.name}
          {hasSubMenu && <i className='px-2 fa fa-angle-down'></i>}
        </SmartLink>
      )} */}
      {hasSubMenu && (
        <div
          className={
            'px-3 h-full whitespace-nowrap duration-300 text-sm justify-between dark:text-gray-300 cursor-pointer flex flex-nowrap items-center ' +
            (selected
              ? 'bg-green-600 text-white hover:text-white'
              : 'hover:text-green-600')
          }>
          <div>
            {link?.icon && <i className={link?.icon} />} {link?.name}
            {hasSubMenu && (
              <i
                className={`px-2 fas fa-chevron-down duration-500 transition-all ${show ? ' rotate-180' : ''}`}></i>
            )}
          </div>
        </div>
      )}

      {!hasSubMenu && (
        <div
          className={
            'px-3 h-full whitespace-nowrap duration-300 text-base justify-between dark:text-gray-300 cursor-pointer flex flex-nowrap items-center '
          }>
          <SmartLink href={link?.href} target={link?.target}>
            {link?.icon && <i className={link?.icon} />} {link?.name}
          </SmartLink>
        </div>
      )}

      {/* 子菜单 */}
      {hasSubMenu && (
        <ul
          style={{ backdropFilter: 'blur(3px)' }}
          className={`${show ? 'visible opacity-100 top-12' : 'invisible opacity-0 top-20'} drop-shadow-md overflow-hidden rounded-md text-black dark:text-white bg-white dark:bg-black transition-all duration-300 z-20 absolute block  `}>
          {link.subMenus.map((sLink, index) => {
            return (
              <li
                key={sLink.id}
                className='not:last-child:border-b-0 border-b text-gray-700 dark:text-gray-200  hover:bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200  dark:border-gray-800 py-3 pr-6 pl-3'>
                <SmartLink href={sLink.href} target={link?.target}>
                  <span className='text-xs font-extralight'>
                    {link?.icon && <i className={sLink?.icon}> &nbsp; </i>}
                    {sLink.title}
                  </span>
                </SmartLink>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
