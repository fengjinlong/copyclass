<template >
  <div style="padding:30px;">
    <button @click="click">btn</button>
  </div>
</template>

<script>
  export default {
    methods: {
      click () {
        this.$router.push('/nested/mm')
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>

</style>