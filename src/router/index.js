import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MovieList from '@/components/MovieList'
import coming from '@/components/coming'
import MovieDetail from '@/components/MovieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/movieList',
      name: 'MovieList',
      component: MovieList
    },
    {
      path: '/coming',
      name: 'coming',
      component: coming
    },
    {
      path: '/movieDetail',
      name: 'MovieDetail',
      component: MovieDetail
    }
  ]
})
