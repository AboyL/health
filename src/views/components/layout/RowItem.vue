<template>
  <div class="row">
    <div class="col"
         v-for="(item,index) in row"
         :key="index">
         {{item.value}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'RowItem',
  props: {
    row: Array
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
