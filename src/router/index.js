import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/PokemonPage')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
