<template>
 
</template>

<script>
export default {
  props: ['result'],
  methods: {
    sendResult() {
    this.$emit('end', this.result)
    }
  }
}
</script>

<style>

</style>