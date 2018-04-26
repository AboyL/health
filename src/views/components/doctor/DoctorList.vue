<template>
  <div class="container">
    <doctor-item v-for="item of list"
                 :key="item.id"
                 :item="item">
    </doctor-item>
  </div>
</template>
<script>
import DoctorItem from './DoctorItem'
export default {
  name: 'DoctorList',
  components: {
    DoctorItem
  },
  props: {
    list: Array
  }
}
</script>
<style scoped lang='scss'>

</style>
