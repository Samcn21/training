<template>
  <section>
    <p> Enter the start point and end point of numeric values to make the counter-up or the counter-down.</p>
    <input type="number" placeholder="first-number" v-model="firstNumber">
    <input type="number" placeholder="second-number" v-model="secondNumber">
    <button @click="counterActivator">Click me</button>
  </section>
  <p>{{ finalResult }}</p>
</template>

<script>
export default {
  name: 'counter-number',
  data() {
    return {
      firstNumber: '',
      secondNumber: '',
      finalResult: '',
      counterNumber: '',
      addingNumbers: 0
    }
  },
  methods: {
    counterActivator() {
      var step = Math.abs(this.secondNumber - this.firstNumber)/10
      
      if (this.secondNumber > this.firstNumber) {
        this.addingNumbers = this.firstNumber
        const counterUp = () => {
          this.addingNumbers += (Math.round(Math.random() * step))
          if (this.addingNumbers < this.secondNumber) {
            this.finalResult = this.addingNumbers
          } else {
            this.finalResult = this.secondNumber
          }
        }
        setInterval(counterUp, 100)

      } else {
        this.subtractNumbers = parseInt(this.firstNumber)
        
        const counterDown = () => {
          this.subtractNumbers -= (Math.round(Math.random() * step))
          
          if (this.subtractNumbers > this.secondNumber) {
            this.finalResult = this.subtractNumbers
          } else {
            this.finalResult = this.secondNumber
          }
        }
        setInterval(counterDown, 100)
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
  width: 50px;
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