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
    font-size: 6rem;
    font-weight: 600;
    color:#18384f;
    padding-top: 20%;
    
}

</style>
