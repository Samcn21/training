<template>
    <div class="cell" @click="execute" @keyup.enter="keyboard">
        <Icon :icon="player" />
    </div>    
</template>

<script>
import Icon from '../tic-tac-toe/Icon.vue'

export default {
    name: 'Cell',
    components: {
        Icon
    },
    props: {
        cellIndex: {
            type: Number,
            required: true
        },
        player: {
            type: String,
            default: ''
        }
    },
    emit: ['click-cell'],
    computed: {
        // player: () => {
        //     return ''
        // }
    },
    methods: {
        execute() {
            this.$emit('click-cell', this.cellIndex)
        }
    }
}


</script>

<style>

.cell {
    width: 10rem;
    height: 10rem;
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: rgba(50, 170, 44, 0.2);
}

</style>