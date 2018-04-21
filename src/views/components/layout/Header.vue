/*
 * @Author: L
 * @Date: 2018-04-21 15:54:14
 * @Last Modified by:   L
 * @Last Modified time: 2018-04-21 15:54:14
 */
<template>
<div class="header">
    <div class="header-left"
        v-if="hasHeaderLeft"
        @click="back">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#h-icon-back"></use>
      </svg>
    </div>
    <div class="title">
        {{title}}
    </div>
    <div class="header-right">

    </div>
</div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    hasHeaderLeft: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped lang='scss'>
@import '~style/variable.scss';
@import '~style/mixin.scss';

.header {
  position: relative;
  background: linear-gradient(#8cf3d2, #8cf39c, #00ff70);
  color: $fontColor;
  border-bottom: 1px solid $border-color;
  @include hf-height-lineHeight;
  .header-left {
    @include vertical-center;
    font-size: 25px;
    vertical-align: middle;
  }
  .title {
    @include horizontal-center;
    line-height: 0.86rem;
  }
}
</style>
