import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import NotionPage from '@/components/NotionPage'
import TwikooCommentCount from '@/components/TwikooCommentCount'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import CONFIG from '../config'
import CategoryItem from './CategoryItem'
import TagItemMini from './TagItemMini'

// 主页文章单个显示卡片

const BlogPostCard = ({ post, showSummary }) => {
  const showPreview =
    siteConfig('MEDIUM_POST_LIST_PREVIEW', null, CONFIG) && post.blockMap
  const { locale } = useGlobal()
  return (
    <div
      key={post.id}
      data-aos='fade-up'
      data-aos-duration='300'
      data-aos-once='false'
      data-aos-anchor-placement='top-bottom'
      className='mb-6 max-w-7xl border-b dark:border-gray-800 '>
      <header className='lg:py-8 py-4 flex flex-col w-full'>
        <Link
          href={post?.href}
          passHref
          className={
            'cursor-pointer font-bold  hover:underline text-3xl leading-tight text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400'
          }>
          <h2>
            {siteConfig('POST_TITLE_ICON') && (
              <NotionIcon icon={post.pageIcon} />
            )}
            {post.title}
          </h2>
        </Link>

        <div
          className={
            'flex mt-2 items-center justify-start flex-wrap space-x-3 text-gray-400'
          }>
          <div className='text-sm py-1'>{post.date?.start_date}</div>
          {siteConfig('MEDIUM_POST_LIST_TAG', null, CONFIG) &&
            post?.tagItems?.map(tag => (
              <TagItemMini key={tag.name} tag={tag} />
            ))}
          <TwikooCommentCount post={post} className='hover:underline' />
        </div>

        <div className='flex'></div>

        {(!showPreview || showSummary) && (
          <main className='my-4 text-gray-700 dark:text-gray-300 text-sm font-light leading-7'>
            {post.summary}
          </main>
        )}

        {showPreview && (
          <div className='overflow-ellipsis truncate'>
            <NotionPage post={post} />
          </div>
        )}
      </header>
    </div>
  )
}

export default BlogPostCard
