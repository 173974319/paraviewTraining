<template>
  <div style="width:45rem;margin:0 auto;display:table;">
    <el-container style="border-bottom: solid;border-width: thin;border-color: darkgray">
      <el-row style="margin-top: 0.5rem;margin-bottom: 0.5rem">
        <el-button class="el-button-guide" size="small">全站</el-button>
        <el-button class="el-button-guide" size="small">科学</el-button>
        <el-button class="el-button-guide" size="small">数码</el-button>
        <el-button class="el-button-guide" size="small">体育</el-button>
        <el-button class="el-button-guide" size="small">时尚</el-button>
        <el-button class="el-button-guide" size="small">影视</el-button>
      </el-row>
    </el-container>
    <el-container v-for="(item,i) in hotlist" :key="i"
                  style="border-bottom: solid;border-width: thin;border-color: darkgray">
      <el-container>
        <el-container>
          <el-header style="font-family: 黑体;font-size: 1.3rem;font-weight: 900;margin-top: 10px">
            <div>
              <span style="font-size: x-large;color: orangered;font-family: 微软雅黑">{{item.number}}</span>
              &nbsp;
              <span style="font-family: 微软雅黑">{{item.title}}</span>
            </div>
          </el-header>
          <el-main>{{item.content }}</el-main>
          <el-footer style="padding-left: 3rem">
            <el-button type="text" icon="el-icon-data-line">{{item.hot}}万热度</el-button>
            <el-button type="text" icon="el-icon-position">分享</el-button>
          </el-footer>
        </el-container>
        <el-aside width="200px" style="margin-top: 2.5rem">
          <img v-bind:src="item.url" height="130px" width="200px" style="border-radius:5px"/>
        </el-aside>
      </el-container>
    </el-container>
    <!--<div v-for="(item,i) in orders" :key="i" class="text item">-->
    <!--{{item.command }}-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'zhihu_hotlist',
    data () {
      return {
        'hotlist': [
          {
            'number': 1,
            'hot': 1789,
            'url': require('../../images/hot_a.jpg'),
            'title': '如今科技这么发达，为什么还是抓不到人贩子「梅姨」？',
            'content': '最近，神秘人贩子“梅姨”引起轩然大波，现在科技这么发达，为什么还是抓不到梅姨？ 官方辟谣：广东增城被拐9名儿童案件嫌疑人“梅姨”的第二张画像非官方公布信...'
          },
          {
            'number': 2,
            'hot': 1360,
            'url': require('../../images/hot_b.jpg'),
            'title': '你有哪些力挽狂澜的神操作？',
            'content': '有如神助，创造奇迹 镜像问题你有哪些自以为聪明，但其实愚蠢透顶的操作？'
          },
          {
            'number': 3,
            'hot': 1283,
            'url': require('../../images/hot_c.jpg'),
            'title': '为什么有人天天耳朵上戴着 AirPods？',
            'content': ''
          },
          {
            'number': 4,
            'hot': 819,
            'url': require('../../images/hot_d.gif'),
            'title': '外卖商家会因为红包而少给食物材料吗？',
            'content': '我比较希望各位美团或者饿了么的商家匿名说一下，你们会不会因为客户用了红包啊，或者凑满减，而少给呢？'
          },
          {
            'number': 5,
            'hot': 774,
            'url': require('../../images/hot_e.jpg'),
            'title': '为什么有些胖子明明瘦下来会很好看，却仍然在肥胖的道路上越走越远？',
            'content': ''
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .el-button-guide {
    background-color: whitesmoke;
  }
</style>
