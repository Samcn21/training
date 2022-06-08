<template>
    <div class="icon">
        {{ icon }}
    </div>   
</template>

<script>


export default {
    name: 'Icon',
    props: {
        icon: {
            type: String,
            default: ''
        }
    }
}

</script>

<style scoped>

.icon {
    font-size: 2rem;
    color: red;
}

</style>
