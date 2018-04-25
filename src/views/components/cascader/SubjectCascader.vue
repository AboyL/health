<template>
  <div>
    <el-cascader :options="subjects"
                 v-if="subjects.length>0"
                 class="cascader"
                 v-model="subject"
                 change-on-select
                 @change="change"></el-cascader>
  </div>
</template>
<script>
export default {
  name: 'SubjectCascader',
  data () {
    return {
      subject: []
    }
  },
  computed: {
    subjects () {
      console.log(this.$store.state.subjects.length)
      return this.$store.state.subjects
    }
  },
  methods: {
    change (val) {
      this.$store.commit('changeSubject', val)
      console.log(this.$store.state.subject)
      console.log(this.$data.subject)
    }
  },
  mounted: function () {
    this.subject = this.$store.state.subject
  }
}
</script>
<style scoped lang='scss'>
.cascader {
  width: 100%;
}
</style>
