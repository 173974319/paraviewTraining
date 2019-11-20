import Vue from 'vue'
import Router from 'vue-router'

import zhihuFind from '../components/zhihu_find.vue'
import zhihuLogin from '../components/zhihu_login.vue'
import zhihuHome from '../components/zhihu_home.vue'
import zhilinji from '../components/zhihu_zhilinji.vue'
import zhihutodolist from '../components/zhihu_todolist.vue'
import zhihuHotlist from '../components/zhihu_hotlist.vue'
import zhihuWaitforU from '../components/zhihu_waitforyou.vue'
// import zhihuSidebar from '../components/zhihu_sidebar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', component: zhihuLogin, name: 'invisible_everything'
    },
    {
      path: '/find', component: zhihuFind, name: 'invisible_sidebar'
    },
    {
      path: '/login', component: zhihuLogin, name: 'invisible_everything'
    },
    {
      path: '/waitforyou', component: zhihuWaitforU
    },
    {
      path: '/home',
      component: zhihuHome,
      children: [
        {
          path: '/home/commands', component: zhilinji
        },
        {
          path: '/home/todolist', component: zhihutodolist
        },
        {
          path: '/home/hotlist', component: zhihuHotlist
        }
      ]
    }
  ]
})
