import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import dynamic from 'next/dynamic'
import CONFIG from '../config'
import { AnalyticsCard } from './AnalyticsCard'
import Announcement from './Announcement'
import Card from './Card'
import Catalog from './Catalog'
import { InfoCard } from './InfoCard'

const HexoRecentComments = dynamic(() => import('./HexoRecentComments'))

const FaceBookPage = dynamic(
  () => {
    let facebook = <></>
    try {
      facebook = import('@/components/FacebookPage')
    } catch (err) {
      console.error(err)
    }
    return facebook
  },
  { ssr: false }
)

/**
 * Hexo主题右侧栏
 * @param {*} props
 * @returns
 */
export default function SideRight(props) {
  const {
    post,
    rightAreaSlot,
    notice,
  } = props

  const { locale } = useGlobal()

  // 文章全屏处理
  if (post && post?.fullWidth) {
    return null
  }

  return (
    <div
      id='sideRight'
      className={` lg:w-80 lg:pt-8 ${post ? 'lg:pt-0' : 'lg:pt-4'} hidden md:block`}>
      <div className='sticky top-8 space-y-4'>
        {post && post.toc && post.toc.length > 1 && (
          <Card>
            <Catalog toc={post.toc} />
          </Card>
        )}

        <InfoCard {...props} />
        {siteConfig('HEXO_WIDGET_ANALYTICS', null, CONFIG) && (
          <AnalyticsCard {...props} />
        )}
        <Announcement post={notice} />

        {siteConfig('COMMENT_WALINE_SERVER_URL') &&
          siteConfig('COMMENT_WALINE_RECENT') && <HexoRecentComments />}

        {rightAreaSlot}
        <FaceBookPage />
      </div>
    </div>
  )
}
