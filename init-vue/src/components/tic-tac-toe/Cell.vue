<template>
    <div class="cell console-error" @click="execute" @keyup.enter="keyboard">
        
    </div>    
</template>

<script>
export default {
    name: 'Cell',
    props: {
        cellIndex: {
            type: Number,
            required: true
        }
    },
    methods: {
        execute() {
            console.log('i am executed', this.cellIndex)
        }
    }
}


</script>

<style>

.cell {
    opacity: 0;
    width: 9.8rem;
    height: 9.8rem;
    position: relative;
}

</style>