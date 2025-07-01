import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import BlogPostCard from './BlogPostCard'
import BlogPostCard1 from './BlogPostCard-medium'
import BlogPostListEmpty from './BlogPostListEmpty'
import PaginationSimple from './PaginationSimple'
import Hero from './Hero'
import Cover from './Cover'

import { useRouter } from 'next/router'
import { useState } from 'react'

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

  if (!posts || posts.length === 0) {
    return <BlogPostListEmpty />
  }

  const [Listvisible, setListvisible] = useState(false)
  return (
    <>
      {router.pathname === '/' ? (
        <div className='w-full justify-center content-center relative'>
          <Cover onFinishLoading={() => setListvisible(true)} />

          {Listvisible && (
            <div className='w-full justify-center px-[20rem]'>
              <div id='posts-wrapper'>
                {/* 文章列表  */}
                <div className='space-y-6 px-2'>
                  {posts?.map(post =>
                    post.category === 'space' ? (
                      <BlogPostCard1 key={post.id} post={post} />
                    ) : null
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
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
