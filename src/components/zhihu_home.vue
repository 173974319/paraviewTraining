<template>
  <div style="width: min-content">
    <el-container style="width:50rem;margin:1rem auto;display:table">
      <el-header>
        <el-menu :router=true :default-active="this.$route.path" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="/home/commands">指令集</el-menu-item>
          <el-menu-item index="/home/todolist">TodoList</el-menu-item>
          <el-menu-item index="/home/hotlist">知乎热榜</el-menu-item>
        </el-menu>
      </el-header>
      <div style="width:47.5rem;margin:0 auto;display:table;background-color: white">
        <router-view></router-view>
      </div>
    </el-container>
  </div>
</template>

<script>
  export default {
    /* eslint-disable */
    name: 'zhihu_home'
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
</style>
