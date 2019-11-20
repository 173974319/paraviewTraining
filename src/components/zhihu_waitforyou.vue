<template>
  <div style="margin-top: 14px">
    <div style="width:45rem;margin:0 auto;display:table;background-color: white;padding-right: 60px">
      <el-container style="border-bottom: solid;border-width: thin;border-color: whitesmoke;margin-top: 5px;margin-bottom: 5px">
        <el-row style="margin-top: 0.5rem;margin-bottom: 0.5rem;margin-left: 2rem">
          <el-button class="el-button-guide" icon="el-icon-medal-1" style="background-color:#D2E9FF;color: deepskyblue">人气问题</el-button>
          <el-button class="el-button-guide" icon="el-icon-magic-stick">潜力好问</el-button>
          <el-button class="el-button-guide" icon="el-icon-star-off">新问题</el-button>
          <el-button class="el-button-guide" icon="el-icon-user-solid">人人答</el-button>
        </el-row>
      </el-container>
      <el-container v-for="(item,i) in details" :key="i"
                    style="border-bottom: solid;border-width: thin;border-color: whitesmoke">
        <el-container>
          <el-container>
            <el-header style="height:auto;margin-top: 10px">
              <div>
                <span style="font-size: large;font-family: 微软雅黑;font-weight: bold">{{item.title}}</span>
              </div>
            </el-header>
            <el-main v-if="item.content!==' '">{{item.content }}</el-main>
            <el-footer style="padding-left: 1rem;height:auto;margin-bottom: 10px;margin-top: 10px">
              <el-button type="primary" size="small" style="background-color: white;color: #0099FF;height: 60%"
                         icon="el-icon-edit">写回答
              </el-button>
              &nbsp;
              <el-button type="text" icon="el-icon-plus" style="color: grey">关注问题</el-button>
              &nbsp;
              <el-button type="text" icon="el-icon-alarm-clock" style="color: grey">稍后答</el-button>
              <span style="float: right;color: gray">{{item.answers}}个回答·{{item.view}}个浏览</span>
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'zhihu_waitforyou',
    data () {
      return {
        'details': [
          {
            'answers': 38,
            'view': '3,234',
            'title': '最先察觉魏无羡和蓝湛感情的人是谁？',
            'content': ' '
          },
          {
            'answers': 67,
            'view': '4,546',
            'title': '英雄联盟把闪现放在D还是F?',
            'content': '两者有什么区别？'
          },
          {
            'answers': 124,
            'view': '12,967',
            'title': '怎么觉得肖战本人很难接近？',
            'content': '有一瞬间觉得肖战其实是个内心高冷的人，温和的就是外表，可能有那种感觉，越接近越不了解，越了解越看不懂。'
          },
          {
            'answers': 42,
            'view': '1,264',
            'title': '深蹲为什么会吐？',
            'content': '为什么深蹲时候腿不酸？隔天起来其他部位很酸痛'
          },
          {
            'answers': 255,
            'view': '63,234',
            'title': '明年想去港校的朋友们心情如何……?',
            'content': ' '
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .el-button-guide {
    border-radius: 20px;
    background: whitesmoke;
    color: black;
    border: 0;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>
