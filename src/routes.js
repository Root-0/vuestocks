import Home from './components/stockList.vue'
import portfolio from './components/portfolio.vue'
import errorpage from './components/404.vue'

export const myroutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/portfolio',
        component: portfolio
    },
    {
        path: '*',
        component: errorpage
    }
]