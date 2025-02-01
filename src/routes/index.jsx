import { HeaderOnly } from '../components/Layout'

import Home from '../pages/Home/index.jsx'
import Following from '../pages/Following/index.jsx'
import Profile from '../pages/Profile/index.jsx'
import Upload from '../pages/Upload/index.jsx'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
