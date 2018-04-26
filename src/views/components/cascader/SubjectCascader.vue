/*
 * @Author: L
 * @Date: 2018-04-25 23:31:06
 * @Last Modified by:   L
 * @Last Modified time: 2018-04-25 23:31:06
 */
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
  computed: {
    subject: {
      get () {
        return this.$store.state.subject
      },
      set (val) {
        this.$store.commit('changeSubject', val)
      }
    },
    subjects () {
      return this.$store.state.subjects
    }
  },
  methods: {
    change (val) {
      this.$store.commit('changeSubject', val)
    }
  }
}
</script>
<style scoped lang='scss'>
.cascader {
  width: 100%;
}
</style>
