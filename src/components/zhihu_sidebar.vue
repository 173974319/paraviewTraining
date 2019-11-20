<template>
  <div style="padding-left: 10px;margin-top: 35px">
    <el-container style="background-color: white">
      <el-header>
        <el-container>
          <el-row style="margin-top: 20px">
            <el-button type="text" class="el-button-guide" icon="el-icon-document" style="color: black">写回答</el-button>
            <el-button type="text" class="el-button-guide" icon="el-icon-edit-outline" style="color: black">写文章
            </el-button>
            <el-button type="text" class="el-button-guide" icon="el-icon-chat-dot-square" style="color: black">写想法
            </el-button>
          </el-row>
        </el-container>
      </el-header>
      <el-main>
        <el-row style="margin-top: 10px;border-bottom: solid;border-width: thin;border-color: whitesmoke">
          <el-button type="text" class="el-button-guide" icon="el-icon-time" style="color: grey">我的稍后答</el-button>
        </el-row>
        <el-row style="margin-top: 10px">
          <el-button type="text" class="el-button-guide" icon="el-icon-notebook-2" style="color: grey">我的草稿</el-button>
        </el-row>
      </el-main>
    </el-container>
    <el-container style="background-color: white;margin-top: 10px">
      <el-header style="height: auto">
        <el-container>
          <el-row style="margin-top: 20px">
            <el-button type="text" class="el-button-guide" icon="el-icon-user-solid" style="color: grey">
              创作者中心
              <span style="color: dodgerblue">&nbsp;Lv 1</span>
            </el-button>
          </el-row>
        </el-container>
      </el-header>
      <el-main style="float: left;padding: 0">
        <el-row>
          <el-col style="margin-top: 10px;width: 100px;padding-left: 0">
            <div>
              <el-button type="text" class="el-button-guide" style="color: grey">
                <el-container>
                  <el-header style="height: auto">昨日被阅读数</el-header>
                  <el-main style="color: black;font-family: 微软雅黑;font-size: large">6</el-main>
                  <el-footer>较前日<i class="el-icon-top" style="color: dodgerblue;font-weight: bolder"/>20%</el-footer>
                </el-container>
              </el-button>
            </div>
          </el-col>
          <el-col style="margin-top: 10px;width: 100px;margin-left: 20px">
            <div>
              <el-button type="text" class="el-button-guide" style="color: grey">
                <el-container>
                  <el-header style="height: auto">昨日被赞同数</el-header>
                  <el-main style="color: black;font-family: 微软雅黑;font-size: large">1</el-main>
                  <el-footer>较前日<i class="el-icon-top" style="color: dodgerblue;font-weight: bolder"/>50%</el-footer>
                </el-container>
              </el-button>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'zhihu_sidebar'
  }
</script>

<style scoped>
  .el-button-guide {
    border-width: 0;
    padding-left: 10px;
  }
</style>
