<template>
  <div class="row">
    <div class="col"
         v-for="(value,index) in row"
         :key="index">
         {{value}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'RowItem',
  props: {
    row: Object
  }
}
</script>
<style scoped lang='scss'>
.row{
  display: flex;
  .col{
    flex:1;
    text-align: center
  }
}
</style>
