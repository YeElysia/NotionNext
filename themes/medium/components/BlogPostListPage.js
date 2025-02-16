import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import BlogPostCard from './BlogPostCard'
import BlogPostListEmpty from './BlogPostListEmpty'
import PaginationSimple from './PaginationSimple'
import Hero from './Hero'

import { useRouter } from 'next/router'

/**
 * 文章列表分页表格
 * @param page 当前页
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListPage = ({ page = 1, posts = [], postCount, siteInfo }) => {
  const { NOTION_CONFIG } = useGlobal()
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  const totalPage = Math.ceil(postCount / POSTS_PER_PAGE)
  const router = useRouter()

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

  if (!posts || posts.length === 0) {
    return <BlogPostListEmpty />
  }

  return (
    <>
      {router.pathname === '/' ? (
        <div className='w-full h-full relative justify-center content-center my-5 p-5 translate-y-[200px]'>
          <div className='loading w-full relative m-6 text-center text-xl flex flex-col animate-[spin_6.3s_linear_infinite]'>
            <div className='outdiv '>{dots_out}</div>
            <div className='indiv'>{dots_in}</div>
          </div>
        </div>
      ) : null}
      {router.pathname === '/' ? null : (
        <div className='w-full justify-center'>
          <div id='posts-wrapper'>
            {/* 文章列表  */}
            <div className='space-y-6 px-2'>
              {posts?.map(post => (
                <BlogPostCard
                  index={posts.indexOf(post)}
                  key={post.id}
                  post={post}
                  siteInfo={siteInfo}
                />
              ))}
            </div>
          </div>
          <PaginationSimple page={page} totalPage={totalPage} />
        </div>
      )}
    </>
  )
}

export default BlogPostListPage
