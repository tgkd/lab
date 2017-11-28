/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import SetValuesPage from '@/containers/SetValuesPage'
import ResultPage from '@/containers/ResultPage'
import DiagramPage from '@/containers/DiagramPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'SetValuesPage',
            component: SetValuesPage,
        },
        {
            path: '/result',
            name: 'ResultPage',
            component: ResultPage,
        },
        {
            path: '/diagram',
            name: 'DiagramPage',
            component: DiagramPage,
        },
        
    ],
})
