import AsyncComponent from '@/components/AsyncComponent/asyncComponent'
const topicList = AsyncComponent(() => import('@/views/Bronze/topicList/'))

const routers = [
  {
    path: '/',
    component: topicList
  }
]

export default routers
