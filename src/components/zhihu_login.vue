<template>
  <div style="position: absolute;width: 100px;height: 100px;margin:5rem 0 0 28rem;">
    <div style="height: 30rem;width: 20rem">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
               class="demo-ruleForm">
        <el-form-item>
          <img src="../../images/zhihulogo.png" height="60" width="120"/></el-form-item>
        <el-form-item label="账号" prop="acco">
          <el-input type="account" v-model="ruleForm.acco" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        <el-form-item>
          <el-alert
            title="填了东西就能登录哦~"
            type="success">
          </el-alert>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      var validateAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'))
        } else {
          if (this.ruleForm.checkAcco !== '') {
            this.$refs.ruleForm.validateField('checkAcco')
          }
          callback()
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        }
        callback()
      }
      return {
        ruleForm: {
          acco: '',
          pass: ''
        },
        rules: {
          acco: [
            {validator: validateAccount, trigger: 'blur'}
          ],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push({path: '/home/commands'})
            this.$alert('登陆成功', 'Callback', {
              confirmButtonText: '确定'
            })
          } else {
            console.log('登陆失败!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>
