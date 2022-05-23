import { createRouter, createWebHistory } from 'vue-router'
import AgeCalculator from '../views/AgeCalculator.vue'
import CounterNumber from '../views/CounterNumber.vue'
import RandomNumber from '../views/RandomNumber.vue'

const routes = [
  {
    path: '/age-calculator',
    name: 'age-calculator',
    component: AgeCalculator
  },
  {
    path: '/counter-number',
    name: 'counter-number',
    component: CounterNumber
  },
  {
    path: '/random-number',
    name: 'random-number',
    component: RandomNumber
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
