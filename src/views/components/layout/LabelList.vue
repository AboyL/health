/*
 * @Author: L
 * @Date: 2018-04-25 23:31:34
 * @Last Modified by: L
 * @Last Modified time: 2018-04-26 21:17:35
 */
<template>
<div>
  <div class="item"
  v-for="item of LabelList"
  :key="item.key"
  @click="click(item.key)"
  >
    <div class="label">
      {{item.label}}
    </div>
    <div class="content">
      {{item.content}}
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'LabelList',
  props: {
    LabelList: {
      type: Array
    }
  },
  methods: {
    click (key) {
      this.$emit('click', key)
    }
  }
}
</script>
<style scoped lang='scss'>
@import "~style/variable.scss";
.item {
  height: 1rem;
  line-height: 1rem;
  border-bottom: 1px solid $border-color;
  padding-left: 10px;
  padding-right: 20px;
  .label {
    float: left;
  }
  .content {
    float: right;
  }
}
</style>
