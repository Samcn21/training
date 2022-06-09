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
            isGameInit: false,
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

            this.handleGamePlay(key, 'Keyboard');     
        },
        handleMouse(payload) {
            this.handleGamePlay(payload, 'Mouse');
        },
        handleGamePlay(cellIndex, device) {
            // keyboard is always X
            // mouse is always O
            const player1 = device === 'Keyboard' ? 'X' : 'O';
            const player2 = device === 'Keyboard' ? 'O' : 'X';

            // if the game is not initialized yet means that mouse is not clicked yet and keyboard was the first user entry
            if (!this.isGameInit) {
                this.isGameInit = true; // game initialized
                this.takeAction(player1, cellIndex);
                this.nextPlayer = player2;
                return;
            } 

            // if the game is initialized already and keyboard player is the next move, keyboard takes action and we set the next turn for mouse player
            if (this.nextPlayer === player1) {
                const cellObject = this.cells[cellIndex - 1];

                if (cellObject.player === '') {
                    this.takeAction(player1, cellIndex);  
                } else {
                    console.log('This cell is already occupied, please try another cell!');
                    return;
                }

                this.nextPlayer = player2;
            } else {
                console.log('be patient! it is not your turn yet!')
            }             
        },
        takeAction(player, cellIndex) {
            this.cells[cellIndex - 1].player = player;
        },
        findWinner() {
            const playerX = [];
            const playerO = [];
            for (let i = 0; i < this.cells.length; i++) {
                const cell = this.cells[i];
                
                if (cell.player === 'X') {
                    playerX.push(cell.cellIndex);
                }

                if (cell.player === 'O') {
                    playerO.push(cell.cellIndex);
                }
            }

            if (this.cells.length < 5) {
                return;
            }

            console.log(playerX, playerO);

            const winnerPattern = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                [1, 4, 7],
                [2, 5, 8],
                [3, 6, 9],
                [3, 5, 7],
                [1, 5, 9]
            ];

        }
    },
    watch: {
        cells: {
            handler: function() {
                this.findWinner();
            },
            deep: true
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