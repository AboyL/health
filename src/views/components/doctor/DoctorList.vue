<template>
  <div class="container">
    <doctor-item v-for="item of doctorList"
                 :key="item.id"
                 :item="item">
    </doctor-item>
  </div>
</template>
<script>
import DoctorItem from './DoctorItem'
import hospitalService from 'service/hospital.service.js'

export default {
  name: 'DoctorList',
  components: {
    DoctorItem
  },
  props: {
    list: Array
  },
  data () {
    return {
      doctorList: []
    }
  },
  computed: {
    subject () {
      return this.$store.state.subject
    },
    alreadyChooseSuject: function () {
      return this.$store.state.subject.length >= 2
    }
  },
  mounted () {
    if (this.alreadyChooseSuject) {
      hospitalService.getDoctors(this.$store.state.subject)
        .then((res) => {
          console.log(res)
          this.doctorList = res
        })
    }
  },
  watch: {
    subject () {
      if (this.alreadyChooseSuject) {
        hospitalService.getDoctors(this.$store.state.subject)
          .then((res) => {
            console.log(res)
            this.doctorList = res
          })
      }
    }
  }
}
</script>
<style scoped lang='scss'>

</style>
