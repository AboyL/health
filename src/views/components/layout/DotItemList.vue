/*
 * @Author: L
 * @Date: 2018-04-25 23:31:21
 * @Last Modified by: L
 * @Last Modified time: 2018-05-22 15:21:19
 */
<template>
  <div class="list">
    <div class="item"
         v-for="item of itemList"
         :key="item.key"
         @click="item.cb?item.cb():function(){}">
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
  },
  methods: {
    test: function () {
      this.itemList[0].cb()
    }
  }
}
</script>
<style scoped lang='scss'>
@import '~style/mixin.scss';
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding: 0.3rem;
  .item {
    @include gradual-background;
    $size: 1rem;
    padding: 0.3rem;
    margin: 0.1rem;
    font-size: 0.1rem;
    border-radius: 50%;
    width: $size;
    height: $size;
    line-height: $size;
    text-align: center;
    vertical-align: middle;
    color: white;
  }
}
</style>
