<template>
  <div class="container">
    <Header :title="headerTitle">
    </Header>
    <div class="img-box">
      <img :src="detail.img"
           alt="">
    </div>
    <div class="item name">
      {{detail.name}}
    </div>
    <div class="item">
      {{detail.detail}}
    </div>
    <div class="block">
      <el-date-picker v-model="date"
                      format="yyyy-MM-dd"
                      type="date"
                      align="right"
                      :picker-options="pickerOptions"
                      placeholder="请选择预定日期">
      </el-date-picker>
    </div>
    <el-button type="primary"
               round
               @click="reserve"
               class="btn">立即预定
    </el-button>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import HospitalService from 'service/hospital.service.js'
import util from 'util'

export default {
  name: 'hospitalPhysicalExaminationDetail',
  components: {
    Header
  },
  data () {
    return {
      headerTitle: '体检内容详情',
      detail: {},
      date: '',
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      }
    }
  },
  methods: {
    async reserve () {
      if (this.date) {
        util.getFormatDay(this.date)
        console.log(this.date)
        console.log(util.getFormatDay(this.date))
        let submit = await HospitalService.submitPhysicalExamination(
          {
            key: this.$route.params.key,
            date: util.getFormatDay(this.date),
            username: this.$store.state.username
          }
        )
        if (submit.status) {
          util.successMessage({
            message: '预定成功',
            onClose: () => {
              this.$router.go(-2)
            }
          })
        } else {
          util.warningMessage({
            message: '预定失败'
          })
        }
        console.log(submit)
      } else {
        util.warningMessage({
          message: '未选择时间'
        })
      }
    }
  },
  async mounted () {
    let detail = await HospitalService.getPhysicalExamination({ key: this.$route.params.key })
    if (detail.status) {
      this.detail = detail.data.physicalExamination
      console.log(detail)
    } else {
      util.warningMessage({
        message: '加载失败'
      })
    }
  }
}
</script>
<style scoped lang='scss'>
.img-box {
  img {
    width: 100%;
    height: 3rem;
  }
}
.item {
  padding: 0.1rem;
  margin: 0.1rem;
  &.name {
    color: orange;
  }
}

.btn {
  position: absolute;
  margin: 0.2rem;
  right: 0.1rem;
}
.container /deep/ .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
.container /deep/ .el-input--suffix .el-input__inner {
  padding-left: 1rem !important;
}
</style>
