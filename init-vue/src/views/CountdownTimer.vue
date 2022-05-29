<template>
  <section class="slideShow" v-if="showSlides">
    <div id="slider">
      <section>
        <img src="../assets/images-countdown-timer/image-1.png">
        <img src="../assets/images-countdown-timer/image-2.png">
        <img src="../assets/images-countdown-timer/image-3.png">
        <img src="../assets/images-countdown-timer/image-4.png">
      </section>
      <div class="indicator"></div>
    </div>
  </section>  

  <div class="container" v-if="showSlides">
    Title:<input type="text" v-model="title"/>
    Date:<input type="date" v-model="date"/>
    Time:<input type="time" v-model="time"/>
    <button @click="startTimer(), showTimer = !showTimer, showSlides = !showSlides">Get Time</button>
  </div>
  <p v-if="showTimer">{{ timerElement }}</p>
</template>

<script>
export default {
  data() {
    return {
    title: '',
    date: null,
    time: '00:00',
    showTimer: false,
    showSlides: true,
    timerElement: ''
    }
  },
  methods: {
    startTimer() {
      var targetTime = new Date(this.date + " " + this.time).toISOString()
      var unixTargetTime = new Date(targetTime).getTime()
       
      setInterval( countdownTimer => {
        var unixNow = new Date().getTime()
        var timeBetween = unixTargetTime - unixNow
        var days = Math.floor(timeBetween / 86400000)
        var hours = Math.floor((timeBetween % 86400000) / 3600000)
        var minutes = Math.floor((timeBetween % 3600000) / 60000)
        var seconds = Math.floor((timeBetween % 60000) / 1000)

        this.timerElement = `${days}d ${hours}h ${minutes}m ${seconds}s until ${this.title}`

        if (timeBetween < 0 && timeBetween > -1*60000) {
          clearInterval(countdownTimer)
          this.timerElement = this.title
        } else if (timeBetween < 0){
          clearInterval(countdownTimer)
          this.timerElement = "EXPIRED"
        }
      }, 1000)
    }
  }
}
</script>

<style>
body {
  background-color: beige;
  display: flex;
  justify-content: center;
}

p {
  text-align: center;
  font-size: 60px;
  padding-top: 200px;
  font-family: Impact;
  word-spacing: 5px;
}

.container {
  position: relative;
  margin: 30px auto ;
}

.slideShow{
  position: relative;
  box-sizing: content-box;
  display: inline-block;
  padding: 10px;
  background: white;
  max-width: 700px;
  height: 400px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
}
   
#slider { 
  overflow: hidden; 
}

#slider section { 
  position: relative;
  width: 500%;
  animation: 20s sliding ease infinite;
}

#slider section img { 
  width: 20%; 
  float: left; 
}

@keyframes sliding{
  0%   {left: 0%;}
  5%   {left: 0%;}
  25%  {left: -100%;}
  50%  {left: -200%;}
  75%  {left: -300%;}
  100% {left: 0%;}
}        

.indicator{
  width: 100%;
  max-width: 740px;
  height: 6px;
  background: red;
  position: absolute;
  bottom: 0;
  animation: indicating 5s ease infinite;
}

@keyframes indicating{
  from{
    left: -100%;
  }
  to{
    left: 0;
  }
}
</style>