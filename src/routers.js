
import MusicDetail from '@/components/MusicDetail'
import Home from '@/components/Home'

const routes = [
    {
        path: '/details',
        name:'details',
        component: MusicDetail
    },
    {
        path: '/details/:music?',
        name:'detailsMusic',
        component: MusicDetail
    },
    {
        path: '/home',
        name:'home',
        component: Home
    },
    {
        path: '/',
        name:'home',
        component: Home
    },

]

export default routes
