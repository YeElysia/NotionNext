import { ArrowRightCircle } from '@/components/HeroIcons'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import Swipe from './Swipe'

import React, { useState, useEffect } from 'react'

/**
 * 通知横幅
 */
export function NoticeBar() {
  let notices = siteConfig('HEO_NOTICE_BAR', null, CONFIG)
  const { locale } = useGlobal()
  if (typeof notices === 'string') {
    notices = JSON.parse(notices)
  }

  const [hitokotoText, setHitokotoText] = useState('')
  const [hitokotoUrl, setHitokotoUrl] = useState('')
  const [hitokotofrom, setHitokotofrom] = useState('')

  useEffect(() => {
    fetch('https://v1.hitokoto.cn')
      .then(response => response.json())
      .then(data => {
        setHitokotoText(data.hitokoto)
        setHitokotoUrl(`https://hitokoto.cn/?uuid=${data.uuid}`)
        setHitokotofrom(data.from)
      })
      .catch(console.error)
  }, [])

  if (!notices || notices?.length === 0) {
    return (
      <div className='max-w-[86rem] w-full mx-auto flex h-12 mb-4 px-5 font-bold'>
        <div className='animate__animated animate__fadeIn animate__fast group cursor-pointer bg-white dark:bg-[#1e1e1e] dark:text-white hover:border-indigo-600 dark:hover:border-yellow-600 border dark:border-gray-700  duration-200 hover:shadow-md transition-all rounded-xl w-full h-full flex items-center justify-between px-5'>
          <span className='whitespace-nowrap'>一言</span>
          <a
            id='hitokoto_text'
            href={hitokotoUrl}
            target='_blank'
            rel='noopener noreferrer'>
            {hitokotoText || 'Loading...'}
          </a>
          <div>
            <span className='text-xs'>{hitokotofrom}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='max-w-[86rem] w-full mx-auto flex flex-col h-auto mb-4 px-5 font-bold'>
      <div className='animate__animated animate__fadeIn animate__fast group cursor-pointer bg-white dark:bg-[#1e1e1e] dark:text-white hover:border-indigo-600 dark:hover:border-yellow-600 border dark:border-gray-700  duration-200 hover:shadow-md transition-all rounded-xl w-full h-12 flex items-center justify-between px-5 mb-4'>
        <span className='whitespace-nowrap'>{locale.COMMON.NOW}</span>
        <div className='w-full h-full hover:text-indigo-600 dark:hover:text-yellow-600 flex justify-center items-center'>
          <Swipe items={notices} />
        </div>
        <div>
          <ArrowRightCircle className={'w-5 h-5'} />
        </div>
      </div>
      <div className='animate__animated animate__fadeIn animate__fast group cursor-pointer bg-white dark:bg-[#1e1e1e] dark:text-white hover:border-indigo-600 dark:hover:border-yellow-600 border dark:border-gray-700  duration-200 hover:shadow-md transition-all rounded-xl w-full h-12 flex items-center justify-between px-5'>
        <span className='whitespace-nowrap'>一言</span>
        <a
          id='hitokoto_text'
          href={hitokotoUrl}
          target='_blank'
          rel='noopener noreferrer'>
          {hitokotoText || 'Loading...'}
        </a>
        <div>
          <span className='text-xs'>{hitokotofrom}</span>
        </div>
      </div>
    </div>
  )
}
