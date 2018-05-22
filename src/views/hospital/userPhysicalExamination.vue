<template>
  <div class="container">
    <Header :title="headerTitle">
    </Header>
    <el-tabs class="tabs"
             :tab-position="'top'"
             @tab-click="changeTab">
      <el-tab-pane label="未完成">
        <el-card class="box-card"
                 v-for="item of noPassList"
                 :key="item._id">
          <div class="text item">
            <div>{{item.name}}</div>
          </div>
          <div class="text item">
            <div>编号:{{item._id}}</div>
          </div>
          <div class="text item">
            <div>{{item.date}}</div>
          </div>
          <el-button type="primary"
                     @click="cancelReserve(item._id)"
                     round>取消预约
          </el-button>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="已完成">
        <el-card class="box-card"
                 v-for="item of accomplishList"
                 :key="item._id">
          <div class="text item">
            <div>{{item.name}}</div>
          </div>
          <div class="text item">
            <div>编号:{{item._id}}</div>
          </div>
          <div class="text item">
            <div>{{item.date}}</div>
          </div>
          <div class="tag cancel" v-if="item.isPass===-1">
            已取消
          </div>
          <div class="tag accomplish" v-if="item.isPass===1">
            已完成
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import util from 'util'
import HospitalService from 'service/hospital.service.js'

export default {
  name: 'userPhysicalExamination',
  components: {
    Header
  },
  data () {
    return {
      headerTitle: '我的体检',
      noPassList: [],
      cancelList: [],
      accomplishList: []
    }
  },
  methods: {
    changeTab (item) {
      this.index = item.index
      console.log(this.index)
    },
    async cancelReserve (id) {
      console.log(id)
      let result = await HospitalService.cancelPhysicalExamination({
        username: this.$store.state.username,
        physicalExaminationId: id
      })
      if (result.status) {
        console.log(result)
        util.successMessage({
          message: result.msg,
          onClose: () => {
            this.noPassList = []
            this.accomplishList = []
            this.getUserPhysicalExamination()
          }
        })
      } else {
        util.warningMessage({
          message: result.msg
        })
      }
    },
    async getUserPhysicalExamination () {
      let result = await util.getUserInfo(
        {
          username: this.$store.state.username
        }
      )
      if (result.status) {
        let list = result.data.userInfo.physicalExaminationList
        list.forEach(async (element, index) => {
          let userPhysicalExamination = await HospitalService.getPhysicalExamination({
            key: element.key
          })
          list[index].name = userPhysicalExamination.data.physicalExamination.name
          console.log('list')
          console.log(list[index])
          if (element.isPass === 0) {
            console.log(userPhysicalExamination)
            this.noPassList.push(list[index])
          } else {
            this.accomplishList.push(list[index])
          }
        })
      } else {
        util.warningMessage({
          message: '加载失败'
        })
      }
    }
  },
  async mounted () {
    this.getUserPhysicalExamination()
  }
}
</script>
<style scoped lang='scss'>
.container /deep/ .el-card__body {
  height: 1.5rem;
}
.container /deep/ .el-button {
  position: absolute !important;
  right: 0.2rem !important;
}
@import '~style/variable.scss';
@import '~style/mixin.scss';
.container /deep/ .el-tabs {
  .el-tabs__content {
    .el-tab-pane {
      height: 100% !important;
    }
  }
  .el-tabs__header {
    border-top: 1px solid $border-color !important;
    .el-tabs__nav-scroll {
      background: white;
      .el-tabs__nav {
        display: flex !important;
        width: 100% !important;
        .el-tabs__item {
          flex: 1 !important;
          text-align: center !important;
        }
      }
    }
  }
}
.tag{
  float: right;
  padding: .1rem;
  margin-right: .1rem;
}
.cancel{
  color: green;
}
.accomplish{
  color: blue;
}
</style>
