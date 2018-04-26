/*
 * @Author: L
 * @Date: 2018-04-25 23:31:45
 * @Last Modified by: L
 * @Last Modified time: 2018-04-26 20:29:59
 */
<template>
<div class="container">
    <Header :title="'挂号'"></Header>
    <doctor-list></doctor-list>
</div>
</template>
<script>
import SingleLineContainer from 'components/layout/SingleLineContainer.vue'
import Header from 'components/layout/Header.vue'
import DoctorList from 'components/doctor/DoctorList.vue'

export default {
  name: 'SubjectRegistration',
  components: {
    Header,
    SingleLineContainer,
    DoctorList
  }
}
</script>
<style scoped lang='scss'>
</style>
