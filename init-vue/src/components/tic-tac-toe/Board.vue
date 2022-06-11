<template>
    <div class="board" v-cloak>
        <Cell v-for="cell in cells" :key="cell.cellIndex" :cellIndex="cell.cellIndex" :player="cell.player" @click-cell="handleMouse"  />
        <FinalWinner v-if="showResults" :winner="winner" />
       
        <a v-if="showResults" href="/tic-tac-toe-game2">Play again</a>
    </div>    
</template>

<script>
import Cell from '../tic-tac-toe/Cell.vue';
import FinalWinner from '../tic-tac-toe/FinalWinner.vue';

export default {
    name: 'Board',
    components: {
        Cell,
        FinalWinner
    },
    data() {
        return {
            isGameInit: false,
            nextPlayer: '',
            cells: [],
            showResults: false,
            winner: null
        }
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

            // looping through all cells to find which cells are occupied by which player
            for (let i = 0; i < this.cells.length; i++) {
                const cell = this.cells[i];
                
                if (cell.player === 'X') {
                    playerX.push(cell.cellIndex);
                }

                if (cell.player === 'O') {
                    playerO.push(cell.cellIndex);
                }
            }

            const isWinnerX = this.isWinner(playerX);
            const isWinnerO = this.isWinner(playerO);

            if (isWinnerX) {
                this.showResults = true
                this.winner = 'X'
                console.log('Player X is the Winner! Yay!');
                return;
            }

            if (isWinnerO) {
                this.showResults = true
                this.winner = 'O'
                console.log('Player O is the Winner! Yay!');
                return;
            }

            // const checks = []
            // for (let i = 0; i < this.cells.length; i++) {
            //     const cell = this.cells[i];
            //     if (cell.player !== '') {
            //         checks.push(cell);
            //     }
            // }

            // if (checks.length === 9) {
            //     console.log('No winner! This is a draw!')
            // }

            // checking if all cells are occupied (there is no cell that the player attribute is empty string)
            const areCellsFull = this.cells.every((cell) => cell.player !== '');
            
            // if all cells are occupied and there is no winner, means draw!
            if (areCellsFull) {
                this.showResults = true
                this.winner = 'nobody! This is a draw!'
                console.log('No winner! This is a draw!');
            }
        },
        isWinner(playerArray) {
            const winningPatterns = [
                [1, 2, 3],
                [1, 5, 9],
                [1, 4, 7],
                [4, 5, 6],
                [7, 8, 9],
                [2, 5, 8],
                [3, 6, 9],
                [3, 5, 7],
            ];

            // looping through all winning patterns
            for (let i = 0; i < winningPatterns.length; i++) {
                const winningPattern = winningPatterns[i];
                const conditionsFulfilled = [];

                // looping through each winning pattern
                for (let j = 0; j < winningPattern.length; j++) {
                    const element = winningPattern[j];
                    const foundElement = playerArray.find((x) => x === element);
                    
                    // if one winning pattern element is not found in the player's selected cells,
                    // it means the winning condition will not fulfilled so we break the loop to avoid extra calculation
                    if (foundElement === undefined) {
                        break;
                    }

                    // if the winning pattern element is found in the player's selected cells,
                    // we keep it inside the conditionsFulfilled array 
                    // and will check it outside of the loop to see if all 3 elements are in the player's selected cells
                    conditionsFulfilled.push(foundElement);
                }

                // if all 3 winning pattern elements are found in any of the 8 patterns, it means there is a winner, so we return true.
                if (conditionsFulfilled.length === 3) {
                    return true;
                }
            }

            // none of winning patterns are found in the player's selected cells which means the player is not the winner yet!
            return false;
        },
        playAgain() {
            this.isGameInit = false,
            this.nextPlayer = '',
            this.cells = [],
            this.showResults = false,
            this.winner = null
        }
    },
    watch: {
        cells: {
            handler: function() {
                this.findWinner();
            },
            deep: true
        }
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

a {
    background-color: #fff ;
    position: relative;
    margin: 0 auto;
    width: 30rem;
    height: auto;
    padding:10px;
    font-size: 3rem;
    text-decoration: none;
    box-shadow: 1px 1px 1px 1px black;
    font-family: Georgia;
    font-weight: 600;
}

[v-cloak] {
    display: none;
}
</style>