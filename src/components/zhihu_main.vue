<template>
  <div style="display:table;margin: 0 auto">
    <div>
      <el-menu :router=true :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="/">
          <img src="../../images/zhihulogo.png" height="45" width="91"/>
        </el-menu-item>
        <el-menu-item index="/home/commands">首页</el-menu-item>
        <el-menu-item index="/find">发现</el-menu-item>
        <el-menu-item index="/waitforyou">等你来答</el-menu-item>
        <el-menu-item index="">
          <el-input
            id="input1"
            placeholder="《Vue:从入门到精通》"
            suffix-icon="el-icon-search">
          </el-input>
        </el-menu-item>
        <el-button type="primary" id="ask" @click="handleSearchClick">提问</el-button>
        <el-badge :value="81" class="item" style="padding-left: 80px">
          <i class="el-icon-message-solid" style="border-width: 0;font-size: 25px;color: gray"></i>
        </el-badge>
        <el-badge :value="12" class="item" style="padding-left: 30px">
          <i class="el-icon-s-comment" style="border-width: 0;font-size: 25px;color: gray"></i>
        </el-badge>
        <el-badge is-dot class="item" style="padding-left: 30px">
          <el-avatar icon="el-icon-user-solid" size="small"></el-avatar>
        </el-badge>
      </el-menu>
    </div>
  </div>
</template>
<style>
  #ask {
    margin-top: 0.78rem;
  }

  #input1 {
    width: 20rem;
    background-color: ghostwhite;
  }
</style>
<script>
  export default {
    /* eslint-disable */
    name: 'zhihu_main',
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSearchClick () {
        this.$alert('别急哦，暂时还不能搜索', '', {
          confirmButtonText: '确定',
        })
      }
    }
  }
</script>
