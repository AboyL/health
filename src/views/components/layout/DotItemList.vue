<template>
  <div class="list">
    <div class="item"
         v-for="item of itemList"
         :key="item.key">
      {{item.content}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'DotItemList',
  props: {
    itemList: {
      type: Array
    }
  }
}
</script>
<style scoped lang='scss'>
@import "~style/mixin.scss";
.list {
  display: flex;
  flex-wrap:wrap;
  padding: 0.3rem;
  .item {
    @include gradual-background;
    padding: 0.3rem;
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
    text-align: center;
    color: white;
  }
}
</style>
