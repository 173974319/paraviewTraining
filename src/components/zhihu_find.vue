<template>
  <div>
    <el-row style="padding-left: 20rem;padding-top: 2rem;display:table;">
      <el-col :span="24">
        <el-button style="font-size: 30px" type="text" icon="el-icon-office-building">
          <span style="color: black;font-family: 微软雅黑;font-weight: bolder;padding-left: 5px">最新专题</span>
        </el-button>
      </el-col>
    </el-row>
    <div>
      <el-row :gutter="120">
        <el-col :span="8" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 2 : 0">
          <el-container style="width:auto;margin:0 auto;display:table;background-color: white;"
                        v-for="(item,i) in data" :key="i" v-if="item.id==index">
            <div v-for="(item2) in item.up" :key="item2.url">
              <el-header style="width: auto;height: auto;padding: 0">
                <img v-bind:src="item2.url" height="140rem" width="520rem" style="border-radius: 5px"/>
              </el-header>
              <el-main
                style="padding-left: 0;width: 32rem;border-bottom: solid;border-width: thin;border-color: darkgray">
                <el-header>
                  <el-container>
                    <el-container>
                      <el-header style="width: auto;height: auto;padding-left: 0">
                        <span style="font-family: 微软雅黑;font-size: 1.4rem;font-weight: bold">{{item2.title}}</span>
                      </el-header>
                      <el-header style="width: auto;height: auto;padding-left: 0">
                        <span style="font-size: 0.8rem;color: darkgray">{{item2.update}} · {{item2.view}}浏览</span>
                      </el-header>
                    </el-container>
                    <el-aside width="100px">
                      <el-button type="primary" style="margin:0 auto;display:table">关注专题</el-button>
                    </el-aside>
                  </el-container>
                </el-header>
              </el-main>
            </div>
            <div v-for="(item2,ii) in item.down" :key="ii">
              <el-main style="padding: 0.4rem">
                <el-button type="info" size="small" style="border-width: 0" plain>
                  <span>{{item2.description}}</span>
                </el-button>
                <span style="font-size: medium;padding-left: 1rem">
                {{item2.detail}}
              </span>
              </el-main>
            </div>
          </el-container>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'zhihu_find',
    data () {
      return {
        'counter': 1,
        'data': [
          {
            'id': 1,
            'up': [
              {
                'url': require('../../images/find_a.jpg'),
                'title': '时尚先生 X 知乎「男性魅力的极致与平凡」',
                'view': '111,900',
                'update': '2小时之前更新'
              }
            ],
            'down': [
              {'description': '男性时尚感', 'detail': '有哪些很高格调的男士单品？'},
              {'description': '镜像荷尔蒙', 'detail': '昆汀·塔伦蒂诺 |《好莱坞往事》的酣畅淋漓'},
              {'description': '极致风格', 'detail': '吉米·佩奇 | 齐柏林飞艇的多元风格'}
            ]
          },
          {
            'id': 2,
            'up': [
              {
                'url': require('../../images/find_b.jpg'),
                'title': '2020 我想生活「蓉」易点',
                'view': '27,552,671',
                'update': '1天前更新'
              }
            ],
            'down': [
              {'description': '引力', 'detail': '成都的哪一点，让你很喜欢？'},
              {'description': '快慢', 'detail': '住在成都的你对成都有什么感觉？'},
              {'description': '创新', 'detail': '成都有哪些能让外地游客耳目一新的地方？'}
            ]
          },
          {
            'id': 3,
            'up': [
              {
                'url': require('../../images/find_c.jpg'),
                'title': '用汉语哪个字、词最能代表2019年的中国？',
                'view': '12,783,005',
                'update': '1小时前更新'
              }
            ],
            'down': [
              {'description': '汉语记录2019', 'detail': '你认为，哪个字、哪个词最能代表你的 2019 年？'},
              {'description': '汉语的博大精深', 'detail': '汉语有哪些优点？'},
              {'description': '外国人眼中的外语', 'detail': '外国人学汉语觉得哪里最难？'}
            ]
          },
          {
            'id': 4,
            'up': [
              {
                'url': require('../../images/find_d.jpg'),
                'title': '5G 来临前，上知乎补课',
                'view': '1,212,033',
                'update': '1天前更新'
              }
            ],
            'down': [
              {'description': '想参与活动？点击报名>>', 'detail': '知乎邀你与大咖一起聊聊5G'},
              {'description': '5G能给我们带来什么？', 'detail': '拥有一部 5G 手机'},
              {'description': '5G发展到什么程度了？', 'detail': '2019.6.6 ：5G 商用牌照正式发放'}
            ]
          }
        ]
      }
    }
  }
</script>
<style scoped>

</style>
