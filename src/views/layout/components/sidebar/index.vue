<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './sidebarItem'

export default {
  components: { SidebarItem },
  created () {
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes () {
      // 根据返回的权限路由与所有路由对比，生成左侧菜单路由
      // 当前是返回所有不带hidden为true的路由作为菜单路由
      return this.$router.options.routes
    },
    isCollapse () {
      return !this.sidebar.opened
    }
  }
}
</script>
