<template>
  <div class="container">
    <Header class="header"
            :title="'我的咨询'">
    </Header>
    <div class="card-list">
      <div class="card-item"
           v-for="item in list"
           :key="item.id">
        <div class="question">
          <h1>问题</h1>
          <div>
            {{item.question}}
          </div>
        </div>
        <div class="anser">
          <h1>医生的回答</h1>
          <div>
            {{item.answer}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import HospitalService from 'service/hospital.service.js'
export default {
  name: 'HospitalCounsel',
  components: {
    Header
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    HospitalService.getCounsel().then((res) => {
      console.log(res)
      if (res.status) {
        this.list = res.data.list
      }
    })
  }
}
</script>
<style scoped lang='scss'>
@import '~style/variable.scss';

</style>
