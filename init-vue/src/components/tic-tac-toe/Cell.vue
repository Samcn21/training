<template>
    <div class="cell console-error" @click="execute" @keyup.enter="keyboard">
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
    width: 9.8rem;
    height: 9.8rem;
    position: relative;
}

</style>