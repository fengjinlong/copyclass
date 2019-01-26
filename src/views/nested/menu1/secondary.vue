<template>
  <div class="">
    我是二级页面
    <input type="text">
    <button @click="back">back</button>
  </div>
</template>

<script>
export default {
  name: '',
  created () {

  },
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}

</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
</style>
