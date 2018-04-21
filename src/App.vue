/*
 * @Author: L
 * @Date: 2018-04-21 15:55:40
 * @Last Modified by:   L
 * @Last Modified time: 2018-04-21 15:55:40
 */
<template>
  <div id="app">
    <transition
      name="fade"
      enter-active-class="animated bounceOutRight"
      >
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
