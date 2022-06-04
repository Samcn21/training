import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import AgeCalculator from '../views/AgeCalculator.vue'
import CounterNumber from '../views/CounterNumber.vue'
import RandomNumber from '../views/RandomNumber.vue'
import CountdownTimer from '../views/CountdownTimer.vue'
import AnalogClock from '../views/AnalogClock.vue'
import TicTacToeGame from '../views/TicTacToeGame.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
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
  },
  {
    path: '/countdown-timer',
    name: 'countdown-timer',
    component: CountdownTimer
  },
  {
    path: '/analog-clock',
    name: 'analog-clock',
    component: AnalogClock
  },
  {
  path: '/tic-tac-toe-game',
  name: 'tic-tac-toe-game',
  component: TicTacToeGame
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
