<template>
    <div class="board">
        <Cell v-for="i in totalCells" :key="i" :cellIndex="i"  />
    </div>    
</template>

<script>
import Cell from '../tic-tac-toe/Cell.vue';

export default {
    name: 'Board',
    components: {
        Cell
    },
    data() {
        return {
            something: 213
        }
    },
    computed: {
        totalCells: ()=> {
            return 9;
        }
    },
    mounted() {
        const self = this
        window.addEventListener('keypress', (e) => {
            const key = String.fromCharCode(e.keyCode)
            console.log(key, self.something);
        });
        // console.log(`the component is now mounted. ${this.cellIndex}`)
    }
}
</script>

<style scoped>

.board {
    background-image: url(../../assets/images-tic-tac-toe-game/gameBackground.png);
    background-repeat: no-repeat;
    background-size: contain;
    width: 30rem;
    height: 30rem;
    margin: 0 auto;
    z-index: -1;
    display: flex;
    flex-wrap: wrap;
}

</style>