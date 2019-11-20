<template>
  <div style="width:45rem;margin:0 auto;display:table;">
    <el-container v-for="(item,i) in orders" :key="i"
                  style="border-bottom: solid;border-width: thin;border-color: ghostwhite">
      <el-header style="font-family: 微软雅黑;font-size: xx-large;font-weight: bolder">{{item.command }}</el-header>
      <el-container>
        <el-container>
          <el-aside width="200px">
            <img src="../../images/timg.jpg" height="130px" width="200px" style="border-radius:5px"/>
          </el-aside>
          <el-main>{{item.function }}</el-main>
        </el-container>
        <el-footer style="padding-left: 0">
          <el-button class="el-icon-agree" size="small" type="primary" icon="el-icon-caret-top">赞同</el-button>
          <el-button class="el-icon-agree" size="small" type="primary" icon="el-icon-caret-bottom"></el-button>
          <el-button type="text" icon="el-icon-chat-dot-round">评论</el-button>
          <el-button type="text" icon="el-icon-position">分享</el-button>
          <el-button type="text" icon="el-icon-star-on">收藏</el-button>
          <el-button type="text" icon="el-icon-trophy">感谢</el-button>
        </el-footer>
      </el-container>
    </el-container>
    <!--<div v-for="(item,i) in orders" :key="i" class="text item">-->
    <!--{{item.command }}-->
    <!--</div>-->
  </div>
</template>

<script>
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://api.myjson.com/bins/l1mve', true)
  xhr.send()
  xhr.addEventListener('load', function () {
    const date = xhr.responseText
    console.log(date)
  })

  export default {
    name: 'zhihu_zhilinji',
    data () {
      return {
        'orders': [
          {'command': 'v-text', 'function': '作用 ： 操作元素中的纯文本。快捷方式 ： {{}}'},
          {
            'command': 'v-html', 'function': '作用 ： 操作元素中的HTML标签。v-text会将元素当成纯文本输出，v-html会将元素当成HTML标签解析后输出。'
          },
          {'command': 'v-if、v-else', 'function': '作用：v-if为真 时，显示v-if的内容，否则显示v-else的内容。'},
          {'command': 'v-show', 'function': '作用：判断谋个元素是否显示或隐藏。'},
          {'command': 'v-for', 'function': '作用：可以用来遍历数组/对象。它可以根据data中数据的更新动态刷新视图。'},
          {'command': 'v-on', 'function': '作用：可以用 v-on 指令监听 DOM 事件来触发一些 JavaScript 代码。'},
          {'command': 'v-bind', 'function': '作用：v-bind绑定的是动态的表达式，而非固定的字符串，在v-bind后，就可以动态获取数据。'},
          {'command': 'v-model', 'function': '作用：用于表单数据的双向绑定。'}
        ]
      }
    }
  }
</script>

<style scoped>
  .el-icon-agree {
    background: lightblue;
    color: #409EFF;
    border: 0;
  }
</style>
