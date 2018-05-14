/*
 * @Author: L
 * @Date: 2018-05-07 11:35:43
 * @Last Modified by: L
 * @Last Modified time: 2018-05-14 14:22:08
 */
<template>
  <div class="wrapper">
    <div class="box">
      <div class="title">请选择日期进行挂号</div>
      <div class="dateChoose">
        <div class="line">
          <div>今天</div>
          <div>明天</div>
          <div>后天</div>
        </div>
        <div class="line morning">
          <div class="time"
               :class="{canRegister:today.morning,checked:checkedList[0]}"
               @click="check(0)">
            {{today.morningTitle}}
          </div>
          <div class="time"
               :class="{canRegister:tomorrow.morning,checked:checkedList[1]}"
               @click="check(1)">
            {{tomorrow.afternoonTitle}}
          </div>
          <div class="time"
               :class="{canRegister:afterTomorrow.morning,checked:checkedList[2]}"
               @click="check(2)">
            {{afterTomorrow.morningTitle}}
          </div>
        </div>
        <div class="line afternoon">
          <div class="time"
               :class="{canRegister:today.afternoon,checked:checkedList[3]}"
               @click="check(3)">
            {{today.afternoonTitle}}
          </div>
          <div class="time"
               :class="{canRegister:tomorrow.afternoon,checked:checkedList[4]}"
               @click="check(4)">
            {{tomorrow.morningTitle}}
          </div>
          <div class="time"
               :class="{canRegister:afterTomorrow.afternoon,checked:checkedList[5]}"
               @click="check(5)">
            {{afterTomorrow.afternoonTitle}}
          </div>
        </div>
      </div>
      <div class="operate-box">
        <div class="cancel"
             @click="cancel">取消</div>
        <div class="submit"
             @click="submit">确认</div>
      </div>
    </div>
  </div>
</template>
<script>
import HospitalService from 'service/hospital.service.js'
import util from 'util'
export default {
  name: 'HospitalRegistrationSheet',
  props: {
    doctorId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      today: {},
      tomorrow: {},
      afterTomorrow: {},
      checkedList: [false, false, false, false, false, false],
      registrationIndex: -1
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    submit () {
      if (this.registrationIndex === -1) {
        util.warningMessage({
          message: '没有选择挂号时间'
        })
      } else {
        this.$emit('submit', this.registrationIndex)
      }
    },
    check (index) {
      let canRegister = true
      switch (index) {
        case 0: canRegister = this.today.morning; break
        case 1: canRegister = this.today.afternoon; break
        case 2: canRegister = this.tomorrow.morning; break
        case 3: canRegister = this.tomorrow.afternoon; break
        case 4: canRegister = this.afterTomorrow.morning; break
        case 5: canRegister = this.afterTomorrow.afternoon; break
      }
      if (!canRegister) {
        util.warningMessage({
          message: '所选时间挂号人数已达上限'
        })
      } else {
        this.checkedList.forEach((data, index) => {
          this.checkedList.splice(index, 1, false)
        })
        this.checkedList.splice(index, 1, true)
        this.registrationIndex = index
        console.log(index)
        console.log(this.checkedList)
      }
    }
  },
  mounted () {
    HospitalService.getDoctorRegistrationSheet({
      doctorId: this.doctorId
    }).then((res) => {
      console.log(res)
      this.today = res.data.sheet.today
      // 判断是否到了下午了
      let nowTime = (new Date()).getHours()
      let isAfternoon = (nowTime > 11)// 十一点以后就不能再进行预约了
      this.today.morningTitle = this.today.morning ? '点击预约' : '预约已满'
      if (isAfternoon) {
        this.today.morning = false
        this.today.morningTitle = '不可预约'
      }
      this.today.afternoonTitle = this.today.afternoon ? '点击预约' : '预约已满'
      this.tomorrow = res.data.sheet.tomorrow
      this.tomorrow.morningTitle = this.tomorrow.morning ? '点击预约' : '预约已满'
      this.tomorrow.afternoonTitle = this.tomorrow.afternoon ? '点击预约' : '预约已满'
      this.afterTomorrow = res.data.sheet.afterTomorrow
      this.afterTomorrow.morningTitle = this.afterTomorrow.morning ? '点击预约' : '预约已满'
      this.afterTomorrow.afternoonTitle = this.afterTomorrow.afternoon ? '点击预约' : '预约已满'
      console.log(this.today)
    })
  },
  updated () {
    console.log('更新')
  },
  watch: {
    checkedList: {
      handler (newVal, oldVal) {
        console.log('数组改变')
        // this.checkedList = newVal
      },
      deep: true
    }
  }
}
</script>
<style scoped lang='scss'>
@import '~style/variable.scss';
@import '~style/mixin.scss';

.line {
  display: flex;
  > div {
    flex: 1;
    width: 33%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    border: 1px solid $border-color;
    &.time {
      box-sizing: border-box;
      background: $bgColor;
      color: white;
      &.canRegister {
        background: green;
      }
      &.checked {
        // border: 2px solid blue;
        box-shadow: 0 0 2px 2px blue inset;
      }
    }
  }
}
</style>
