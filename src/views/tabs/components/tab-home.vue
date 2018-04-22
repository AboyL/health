<template>
  <div class="tab-home">
    <CitysCascader class="cascader"></CitysCascader>
    <DotItemList :itemList="itemList"></DotItemList>
  </div>
</template>
<script>
import CitysCascader from 'components/cascader/CitysCascader.vue'
import DotItemList from 'components/layout/DotItemList.vue'

export default {
  name: 'TabUser',
  components: {
    CitysCascader,
    DotItemList
  },
  data () {
    return {
      itemList: [
        {
          key: 'hospitalRegistration',
          content: '挂号'
        }
      ]
    }
  }
}
</script>
<style scoped lang='scss'>
.tab-home {
  height: 100%;
  .cascader{
    margin-bottom: .7rem;
  }
}
</style>
