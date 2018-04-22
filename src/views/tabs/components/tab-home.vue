<template>
  <div class="tab-home">
    <HospitalCascader class="cascader"></HospitalCascader>
    <DotItemList :itemList="itemList"></DotItemList>
  </div>
</template>
<script>
import HospitalCascader from 'components/cascader/HospitalCascader.vue'
import DotItemList from 'components/layout/DotItemList.vue'

export default {
  name: 'TabUser',
  components: {
    HospitalCascader,
    DotItemList
  },
  data () {
    return {
      itemList: [
        {
          key: 'hospital_registration',
          content: '挂号'
        },
        {
          key: 'my_advisory',
          content: '我的咨询'
        },
        {
          key: 'medical_history',
          content: '我的病历'
        }
      ]
    }
  }
}
</script>
<style scoped lang='scss'>
.tab-home {
  height: 100%;
  .cascader {
    margin-bottom: 0.7rem;
  }
}
</style>
