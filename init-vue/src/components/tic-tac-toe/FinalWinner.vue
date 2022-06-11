<template>
<div class="game-result">
    <p>The winner is {{ winner }}</p>
</div>
</template>

<script>
export default {
    name: 'FinalWinner',
    props: {
        winner: {
            type: String,
            default: ''
        }  
    }
}
</script>

<style scoped>
.game-result {
    background-color: rgba(216, 241, 181, 0.7);
    width: 30rem;
    height: 30rem;
    position: fixed;
}
</style>