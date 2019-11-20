<template>
  <div style="height: 33rem;margin:5rem 0 0 13rem">
    <div>
      <el-form :inline="true">
        <el-form-item label="待做事项">
          <el-input v-model="$store.state.inputValue" type="text" placeholder="填一些事情吧~"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAddClick">添加</el-button>
        </el-form-item>
        <el-form-item>
          <el-alert
            title="通过点击事项可以进行删除事项的操作哦"
            type="success">
          </el-alert>
        </el-form-item>
      </el-form>
    </div>
    <ul>
      <li v-for="(item, index) in $store.state.list" :key="index" @click="handleDelClick(index)"
          style="font-size: 30px;font-family: 仿宋;font-weight: bolder">{{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    // 获取store里面的值
    computed: mapState({
      state: state => state.todoList
    }),
    methods: {
      ...mapActions(['handleAdd', 'handleDel']),

      handleAddClick () {
        if (this.$store.state.inputValue !== '') {
          this.handleAdd()
          this.$alert('添加成功', '', {
            confirmButtonText: '确定'
          })
        } else {
          this.$alert('写点东西再提交呗', '', {
            confirmButtonText: '确定'
          })
        }
      },

      handleDelClick (index) {
        this.handleDel(index)
        this.$alert('删除成功', '', {
          confirmButtonText: '确定'
        })
      }
    }
  }
</script>

<style>
</style>
