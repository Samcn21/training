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
            // keyboard is always X
            // mouse is always O
            isGameInit: false,
            player1: '',
            player2: '',
            nextPlayer: '',
            gameState: []
        }
    },
    computed: {
        totalCells: ()=> {
            return 9;
        }
    },
    methods: {
        handleKeyboard(e) {
            // get keyboard input key and convert to number
            const key = +e.key;

            // if the input key is not a number we return early
            if (isNaN(key)) {
                return;
            }

            // since keyboard has no key number greater than 9 we just check if the key is 0 we do early return
            if (key === 0) {
                return;
            }

            // if the game is not initialized yet means that mouse is not clicked yet and keyboard was the first user entry
            if (!this.isGameInit) {
                this.isGameInit = true; // game initialized
                this.player1 = 'X';
                this.player2 = 'O'; 
                this.takeAction('X', key);
                this.nextPlayer = 'O';
                return;
            } 

            // if the game is initialized already and keyboard player is the next move, keyboard takes action and we set the next turn for mouse player
            if (this.nextPlayer === 'X') {
                this.takeAction('X', key);
                this.nextPlayer = 'O';
            } else {
                console.log('be patient! it is not your turn yet!')
            }        
        },
        takeAction(player, cellIndex) {
            const actionObject = {
                player: player,
                cell: cellIndex
            };

            this.gameState.push(actionObject);
        }
    },
    mounted() {
        window.addEventListener('keyup', (e) => this.handleKeyboard(e));
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