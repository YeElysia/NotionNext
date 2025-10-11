import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
<<<<<<< HEAD
=======
import Link from 'next/link'
>>>>>>> 5627ad1fd2e0d443f2841abcaa8a6d37b5c2e4a1
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import { BlogPostCardInfo } from './BlogPostCardInfo'

const BlogPostCard = ({ index, post, showSummary, siteInfo }) => {
  const showPreview =
    siteConfig('HEXO_POST_LIST_PREVIEW', null, CONFIG) && post.blockMap
  if (
    post &&
    !post.pageCoverThumbnail &&
    siteConfig('HEXO_POST_LIST_COVER_DEFAULT', null, CONFIG)
  ) {
    post.pageCoverThumbnail = siteInfo?.pageCover
  }
  const showPageCover =
    siteConfig('HEXO_POST_LIST_COVER', null, CONFIG) &&
    post?.pageCoverThumbnail &&
    !showPreview
  //   const delay = (index % 2) * 200

  return (
    <div
      key={post.id}
      data-aos='fade-up'
      data-aos-duration='300'
      data-aos-once='false'
      data-aos-anchor-placement='top-bottom'
      className='mb-6 max-w-7xl border-b dark:border-gray-800 '>
      <header className='lg:py-8 py-4 flex flex-col w-full'>
        <SmartLink
          href={post?.href}
          passHref
          className={
            'cursor-pointer font-bold  hover:underline text-3xl leading-tight text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400'
          }>
          <h2>
            {siteConfig('MEDIUM_POST_LIST_COVER', null, CONFIG) && (
              <div className='w-full max-h-96 object-cover overflow-hidden mb-2'>
                <LazyImage
                  priority={index === 1}
                  alt={post?.title}
                  src={post?.pageCoverThumbnail}
                  className='h-56 w-full object-cover object-center group-hover:scale-110 duration-500'
                />
              </div>
            )}
            {siteConfig('POST_TITLE_ICON') && (
              <NotionIcon icon={post.pageIcon} />
            )}
            {post.title}
          </h2>
        </SmartLink>

        <div
          className={
            'flex mt-2 items-center justify-start flex-wrap space-x-3 text-gray-400'
          }>
          <div className='text-sm py-1'>{post.date?.start_date}</div>
          {siteConfig('MEDIUM_POST_LIST_CATEGORY', null, CONFIG) && (
            <CategoryItem category={post.category} />
          )}
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
            <div className='pointer-events-none border-t pt-8 border-dashed'>
              <div className='w-full justify-start flex'>
                <SmartLink
                  href={post?.href}
                  passHref
                  className='hover:bg-opacity-100 hover:scale-105 duration-200 pointer-events-auto transform font-bold text-green-500 cursor-pointer'>
                  {locale.COMMON.ARTICLE_DETAIL}
                  <i className='ml-1 fas fa-angle-right' />
                </SmartLink>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

export default BlogPostCard
