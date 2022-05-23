<template>
  <section>
    <p>To get a random number, enter the desired interval and unacceptable values. </p>
    <input type="number" placeholder="min" v-model="minNumber">
    <input type="number" placeholder="max" v-model="maxNumber">
    <input type="text" placeholder="unwanted-numbers" v-model="unwantedNumbers"> (example: num, num,...)
    <button @click="getRandomNumber">Click me</button>
  </section>
  <p>{{ finalResult }}</p>
</template>

<script>
export default {
  name: 'random-number',
  data() {
    return {
      minNumber: '',
      maxNumber: '',
      unwantedNumbers: '',
      finalResult: '',
      obtainedNumbers: [],
      randomNumber: 0
    }
  },
  methods: {
    getRandomNumber() {
    var difference = this.maxNumber - this.minNumber
    var unwanted = this.unwantedNumbers
    var exclusionList = unwanted.split(', ')

    var randomNumber = Math.round((Math.random()) * difference + parseInt(this.minNumber))
    var stringRandomNumber = randomNumber.toString()

    if (exclusionList.includes(stringRandomNumber) === false && this.obtainedNumbers.includes(stringRandomNumber) === false) {
      this.finalResult = stringRandomNumber
      this.obtainedNumbers.push(stringRandomNumber)
    } else {
      this.getRandomNumber ()
      }
    }
  }
}
</script>

<style>
body {
  background-color: beige;
}

body > p {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 2px solid;
}

p {
  padding : 10px;
  font-family: Arial, Helvetica;
  font-weight: 600;
}

input:hover,
input:focus {
  outline: 0px;
  border-color: blue;
  box-shadow: 0px 0px 4px blue;
}
</style>