<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/age-calculator">Age Calculator</router-link> |
    <router-link to="/counter-number">Counter Number</router-link> |
    <router-link to="/random-number">Random Number</router-link> |
    <router-link to="/countdown-timer">Countdown Timer</router-link> |
    <router-link to="/analog-clock">Analog Clock</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
