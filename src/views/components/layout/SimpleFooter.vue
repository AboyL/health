/*
 * @Author: L
 * @Date: 2018-04-21 15:54:25
 * @Last Modified by:   L
 * @Last Modified time: 2018-04-21 15:54:25
 */
<template>
<div>
    <div class="footer">
      <router-link
        v-for="(item,index) in footerList"
        :key='item.type+index'
        :to="{ name: item.linkTo}"
        v-if="item.type==='link'"
      >
        <span>{{item.text}}</span>
      </router-link>
      <span
        v-for="(item,index) in footerList"
        v-if="item.type==='button'"
        @click="item.cb"
        :key='item.type+index'
        >
        {{item.text}}
      </span>
    </div>
</div>
</template>
<script>
export default {
  name: 'SimpleFooter',
  props: {
    // 接受对象，属性有type,text,cb
    // type 有link button 两种
    // text标识sapn中的内容
    // 当type为link的时候可以不传入cb此时为链接进行跳转
    // 当type为button的时候传入cb，点击按钮进行操作
    footerList: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped lang='scss'>
@import "~style/variable.scss";
@import "~style/mixin.scss";

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  @include hf-height-lineHeight;
  span {
    float: right;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    color: $linkColor;
  }
}
</style>
