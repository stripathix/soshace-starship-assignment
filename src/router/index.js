import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieView from '../views/Movie.view.vue'
import StarShipView from '../views/StarShip.view.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movie/:movieId',
    name: 'movie',
    component: MovieView
  },
  {
    path: '/starship/:starshipId',
    name: 'StarShip',
    component: StarShipView
  },
  { path: '*', redirect: '/movie/1' }
]

const router = new VueRouter({
  routes
})

export default router
