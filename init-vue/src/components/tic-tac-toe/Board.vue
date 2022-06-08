<template>
    <div class="board">
        <Cell v-for="cell in cells" :key="cell.cellIndex" :cellIndex="cell.cellIndex" :player="cell.player" @click-cell="handleMouse"  />
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
            cells: []
        }
    },
    computed: {
        // totalCells: ()=> {
        //     return 9;
        // }
    },
    mounted() {
        window.addEventListener('keyup', (event) => this.handleKeyboard(event));

        // generating initial cell objects
        for (let i = 0; i < 9; i++) {
            const cellObject = {
                player: '',
                cellIndex: i + 1 
            }

            this.cells.push(cellObject);
        }
    },
    methods: {
        handleKeyboard(event) {
            // get keyboard input key and convert to number
            const key = +event.key;

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
                const cellObject = this.cells[key - 1];

                if (cellObject.player === '') {
                    this.takeAction('X', key);  
                } else {
                    console.log('This cell is already occupied, please try another cell!');
                    return;
                }

                this.nextPlayer = 'O';
            } else {
                console.log('be patient! it is not your turn yet!')
            }        
        },
        controlEntry(cellIndex, device) {
            
        },
        handleMouse(payload) {
            console.log(payload)
            // if the game is not initialized yet means that keyboard is not pressed yet and mouse was the first user entry
            if (!this.isGameInit) {
                this.isGameInit = true; // game initialized
                this.player1 = 'O';
                this.player2 = 'X'; 
                this.takeAction('O', payload);
                this.nextPlayer = 'X';
                return;
            } 

            // if the game is initialized already and mouse player is the next move, mouse takes action and we set the next turn for keyboard player
            if (this.nextPlayer === 'O') {
                const cellObject = this.cells[payload - 1];

                if (cellObject.player === '') {
                    this.takeAction('O', payload);
                } else {
                    console.log('This cell is already occupied, please try another cell!');
                    return;
                }

                this.nextPlayer = 'X';
            } else {
                console.log('be patient! it is not your turn yet!')
            } 
        },
        takeAction(player, cellIndex) {
            this.cells[cellIndex - 1].player = player;
        }
    },

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