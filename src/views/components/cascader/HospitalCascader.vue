<template>
  <div>
    <el-cascader :options="hospitals"
                 v-if="hospitals.length>0"
                 class="cascader"
                 v-model="hospital"
                 change-on-select
                 @change="change"></el-cascader>
  </div>
</template>
<script>
export default {
  name: 'HospitalCascader',
  data () {
    return {
      hospital: []
    }
  },
  computed: {
    hospitals () {
      console.log(this.$store.state.hospitals.length)
      return this.$store.state.hospitals
    }
  },
  methods: {
    change (val) {
      this.$store.commit('changeHospital', val)
      console.log(this.$store.state.hospital)
      console.log(this.$data.hospital)
    }
  }
}
</script>
<style scoped lang='scss'>
.cascader {
  width: 100%;
}
</style>
