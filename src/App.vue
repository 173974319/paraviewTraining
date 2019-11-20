<template>
  <div>
    <div v-if="this.$route.name == 'invisible_everything'">
      <login></login>
    </div>
    <div v-else-if="this.$route.name != 'invisible_sidebar'" style="background-color: ghostwhite">
      <div style="height: auto;width: 100%;background-color: white">
        <zhihuMain/>
      </div>
      <div>
        <el-container style="width: 1100px;margin: 0 auto">
          <el-main>
            <div style="width: 700px">
              <router-view></router-view>
            </div>
          </el-main>
          <el-aside>
            <div>
              <zhihuSidebar></zhihuSidebar>
            </div>
          </el-aside>
        </el-container>
      </div>
    </div>
    <div v-else>
      <div style="height: auto;width: 100%;background-color: white">
        <zhihuMain/>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import zhihuMain from './components/zhihu_main.vue'
  import ZhihuSidebar from './components/zhihu_sidebar'
  // import zhihu_find from './components/zhihu_find.vue'
  import login from './components/zhihu_login.vue'

  export default {
    name: 'app',
    components: {
      ZhihuSidebar,
      zhihuMain,
      login
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
