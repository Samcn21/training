<template>
  <div class="gameBackground">
    <div class="cellule" @click="play1">{{ content1 }}</div>
    <div class="cellule" @click="play2">{{ content2 }}</div>
    <div class="cellule" @click="play3">{{ content3 }}</div>
    <div class="cellule" @click="play4">{{ content4 }}</div>
    <div class="cellule" @click="play5">{{ content5 }}</div>
    <div class="cellule" @click="play6">{{ content6 }}</div>
    <div class="cellule" @click="play7">{{ content7 }}</div>
    <div class="cellule" @click="play8">{{ content8 }}</div>
    <div class="cellule" @click="play9">{{ content9 }}</div>
    <div class="result-container" v-if = "gameIsOver">
      <div class="result">
        {{result}}
      </div>
    </div>
  </div>
  <GameResult v-if="gameIsOver" :result="result" @end="endGame" />
</template>

<script>
import GameResult from '../components/GameResult.vue'

export default {
  components: { GameResult },
  data() {
    return {
      content1: '',
      content2: '',
      content3: '',
      content4: '',
      content5: '',
      content6: '',
      content7: '',
      content8: '',
      content9: '',
      xTurn: true,
      gameIsOver: false,
      result: null
    }
  },
  methods: {
    play1() {
      if (this.xTurn == true && this.content1 == ''){
        this.content1 = "x"
      }else if (this.content1 == ''){
        this.content1 = "o"
      }
      this.xTurn = !this.xTurn
    },
    play2() {
      if (this.xTurn == true && this.content2 == ''){
        this.content2 = "x"
      }else if (this.content2 == '') {
        this.content2 = "o"
      }
      this.xTurn = !this.xTurn
    },
    play3() {
      if (this.xTurn == true && this.content3 == ''){
        this.content3 = "x"
      }else if (this.content3 == '') {
        this.content3 = "o"
      }
      this.xTurn = !this.xTurn
    },
    play4() {
      if (this.xTurn == true && this.content4 == ''){
        this.content4 = "x"
      }else if (this.content4 == '') {
        this.content4 = "o"
      }
      this.xTurn = !this.xTurn
    },
    play5() {
      if (this.xTurn == true && this.content5 == ''){
        this.content5 = "x"
      }else if (this.content5 == '') {
        this.content5 = "o"
      }
      this.xTurn = !this.xTurn
    },
    play6() {
      if (this.xTurn == true && this.content6 == ''){
        this.content6 = "x"
      }else if (this.content6 == '') {
        this.content6 = "o"
      }
      this.xTurn = !this.xTurn
    },
    play7() {
      if (this.xTurn == true && this.content7 == ''){
        this.content7 = "x"
      }else if (this.content7 == '') {
        this.content7 = "o"
      }
      this.xTurn = !this.xTurn
    },
    play8() {
      if (this.xTurn == true && this.content8 == ''){
        this.content8 = "x"
      }else if (this.content8 == '') {
        this.content8 = "o"
      }
      this.xTurn = !this.xTurn
    },
    play9() {
      if (this.xTurn == true && this.content9 == ''){
        this.content9 = "x"
      }else if (this.content9 == '') {
        this.content9 = "o"
      }
      this.xTurn = !this.xTurn
    },
    endGame() {
      this.result = result
      this.gameIsOver = true
    }
  },
  updated() {
    if (
      this.content1 == 'x' && this.content2 == 'x' && this.content3 == "x" ||
      this.content4 == 'x' && this.content5 == 'x' && this.content6 == 'x' ||
      this.content7 == 'x' && this.content8 == 'x' && this.content9 == 'x' ||
      this.content1 == 'x' && this.content4 == 'x' && this.content7 == 'x' ||
      this.content2 == 'x' && this.content5 == 'x' && this.content8 == 'x' ||
      this.content3 == 'x' && this.content6 == 'x' && this.content9 == 'x' ||
      this.content3 == 'x' && this.content5 == 'x' && this.content7 == 'x' ||
      this.content1 == 'x' && this.content5 == 'x' && this.content9 == 'x') {
        this.gameIsOver = true
        this.result = "X is Winner"
    }else if (
      this.content1 == 'o' && this.content2 == 'o' && this.content3 == 'o' ||
      this.content4 == 'o' && this.content5 == 'o' && this.content6 == 'o' ||
      this.content7 == 'o' && this.content8 == 'o' && this.content9 == 'o' ||
      this.content1 == 'o' && this.content4 == 'o' && this.content7 == 'o' ||
      this.content2 == 'o' && this.content5 == 'o' && this.content8 == 'o' ||
      this.content3 == 'o' && this.content6 == 'o' && this.content9 == 'o' ||
      this.content3 == 'o' && this.content5 == 'o' && this.content7 == 'o' ||
      this.content1 == 'o' && this.content5 == 'o' && this.content9 == 'o') {
        this.gameIsOver = true
        this.result = "O is Winner"
    }else if (
      this.content1 !='' && this.content2 !='' && this.content3 !='' && this.content4 !='' && this.content5 !='' && 
      this.content6 !='' && this.content7 !='' && this.content8 !='' && this.content9 !=''
    ) {
      this.gameIsOver = true
      this.result = "Draw!"
    }
  }
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  
  .gameBackground {
    background-image: url(../assets/images-tic-tac-toe-game/gameBackground.png);
    background-repeat: no-repeat;
    background-size: contain;
    width: 30rem;
    height: 30rem;
    margin: 0 auto;
    z-index: -1;
    display: flex;
    flex-wrap: wrap;
  }

  .cellule {
    width: 10rem;
    height: 10rem;
    background-color: rgba(50, 170, 44, 0.2);
    position: relative;
    flex-wrap: wrap;
    display: flex;
    cursor: pointer;
    text-align: center;
    font-size: 100pt;
    justify-content: center;
  }

  .result-container {
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .result {
    width: 500px;
    height: 300px;
    background-color: yellowgreen;
    font-size: 50pt;
    position: relative;
    margin: 200px auto;
    text-align: center;
    justify-content: center;
    padding: 40px;
  }

</style>