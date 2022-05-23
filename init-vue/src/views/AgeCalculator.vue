<template>
  <div class="container">
    <p>Enter your date of birth:</p> 
    <input type="date" v-model="birthdayDate">
    <button @click="showAge = !showAge">Click me</button>
    <p v-if="showAge">Your age is: {{ calculateAge }} {{ localTime }}</p>
  </div>
</template>

<script>
export default {
  name: 'age-calculator',
  data() {
    return {
      localTime: '',
      birthdayDate: '',
      showAge: ''
    }
  },
  computed:{
    calculateAge: function() {
      let oneYear = 1000 * 60 * 60 * 24 * 365.25
      let currentDate = new Date()
      let birthDate = new Date(this.birthdayDate)
      let difference = currentDate - birthDate
      let year = Math.floor(difference/oneYear)
      let month = Math.floor(((difference/oneYear) - year) * 12)
      let day = Math.floor(((((difference/oneYear) - year) * 12) - month) * 30)
      return (`${year} years, ${month} months, ${day} days, `)
    }
  },
  methods: { 
    showLocaleTime: function () {
      let time = this
      setInterval(function () {
      const current = new Date()
      time.localTime = current.getHours() + " Hours, " + current.getMinutes() + " Minutes, " + current.getSeconds() + " Seconds"
      }, 1000)
    }
  },
  mounted () {
    this.showLocaleTime()
  }
}

</script>

<style>
body {
  background: beige;
  font-family: "Raleway";
}

.container input {
  height: 30px;
  margin: 0 5px;
  border: 1px solid gray;
  padding: 0 10px;
  outline: 0px;
  width: 100px;
}

.container input:hover,
.container input:focus {
  border-color: blue;
  box-shadow: 0px 0px 4px blue;
}

.container #age {
  padding: 5px;
}

.container #time {
  display: none;
}
</style>