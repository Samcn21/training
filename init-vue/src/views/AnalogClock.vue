<template>
  <div class="container">
    <img src="../assets/images-analog-clock/clock.png" class="items">
    <img src="../assets/images-analog-clock/pendulum.png" class="items" id="pendulum">
  </div>

  <div>
    <div class="second-hand"></div>
    <div class="minute-hand"></div>
    <div class="hour-hand"></div>
  </div>
        
</template>

<script>

export default {
  methods: {
    clock() {
      setInterval(() => {
      var date = new Date()
      var second = date.getSeconds()
      var minute = date.getMinutes()
      var hour = date.getHours()

      var secondDegree = second * (360 / 60)
      var minuteDegree = minute * (360 / 60) + second * (360 / 3600)  //  (360 degree / 3600 second)
      var hourDegree = hour * (360 / 12) + minute * (360 / 720)       //  (360 degree / 720 minute)

      document.querySelector(".second-hand").style.transform = "rotate(" + secondDegree + "deg)"
      document.querySelector(".minute-hand").style.transform = "rotate(" + minuteDegree + "deg)"
      document.querySelector(".hour-hand").style.transform   = "rotate(" + hourDegree + "deg)" 
      }, 1000)
    }
  },
  mounted() {
   this.clock()
  }
}
</script>

<style scoped>
.second-hand,
.minute-hand,
.hour-hand {
  position: absolute;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;   
  left: 50%; 
}

.second-hand {
  width: 2px;
  height: 85px;
  background: gold;
  top: 295px;
  z-index: 3;
  transform-origin: center 85px; /* x-axis y-axis */
}

.minute-hand {
  width: 4px;
  height: 80px;
  background: grey;
  top: 300px;
  z-index: 2;
  transform-origin: center 80px;
}

.hour-hand {
  width: 5px;
  height: 60px;
  background: black;
  top: 320px;
  z-index: 1;
  transform-origin: center 60px;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.items {
  margin-left: auto;
  margin-right: auto;         
}

#pendulum {
  animation: pendulum 2000ms infinite;
  transform-origin: center -200px;
  margin-top : -80px;
  z-index: -1;
  animation-timing-function: ease-in-out;
}

@keyframes pendulum {
  0% {
    transform: rotateZ(-8deg)
  }
  50% {
    transform: rotateZ(8deg)
  }
  100% {
    transform: rotateZ(-8deg)
  }
}
</style>