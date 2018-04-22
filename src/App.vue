/*
 * @Author: L
 * @Date: 2018-04-21 15:55:40
 * @Last Modified by: L
 * @Last Modified time: 2018-04-22 17:19:31
 */
<template>
  <div id="app">
    <!-- <transition name="fade"
                mode="out-in"
                leave-active-class="animated bounceOutRight"
                enter-active-class="animated bounceInLeft">
      <router-view/>
    </transition> -->
    <transition name="fade"
               >
      <router-view class="router-view"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang='scss'>
#app {
  height: 100%;
  width: 100%;
  .router-view{
    position: absolute;
  }
  .fade-enter-active {
    animation: bounce-in .3s;
  }
   .fade-leave-active {
    animation: bounce-out .3s;
  }
  @keyframes bounce-in {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    25% {
      transform: translate3d(-75%, 0, 0);
    }
    50% {
      transform: translate3d(-50%, 0, 0);
    }
    75% {
      transform: translate3d(-25%, 0, 0);
    }
    100% {
      transform: translate3d(0px, 0, 0);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: translate3d(0, 0, 0);
    }
    25% {
      transform: translate3d(25%, 0, 0);
    }
    50% {
      transform: translate3d(50%, 0, 0);
    }
    75% {
      transform: translate3d(75%, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }
}
</style>
