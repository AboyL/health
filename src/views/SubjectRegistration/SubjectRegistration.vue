/*
 * @Author: L
 * @Date: 2018-04-25 23:31:45
 * @Last Modified by:   L
 * @Last Modified time: 2018-04-25 23:31:45
 */
<template>
<div class="container">
    <Header :title="'挂号'"></Header>
  挂号
</div>
</template>
<script>
import SingleLineContainer from 'components/layout/SingleLineContainer.vue'
import Header from 'components/layout/Header.vue'

export default {
  name: 'SubjectRegistration',
  components: {
    Header,
    SingleLineContainer
  }
}
</script>
<style scoped lang='scss'>
</style>
