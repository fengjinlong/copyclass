<template>
  <div style="padding:30px;">
    <el-alert :closable="true" title="menu 2" />
    111112
    <el-button type="primary" size="mini" @click="btn">btn</el-button>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  methods: {
    btn () {
      this.$router.push('/three333')
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  
</style>
