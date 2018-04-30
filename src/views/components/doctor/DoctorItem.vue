<template>
  <div class="doctor-item"
       @click="clickDoctor">
    <div class="head-portrait"
         :class="{man:item.sex===1}"></div>
    <div class="content">
      <div class="name item">{{item.name}}</div>
      <div class="position item">{{item.position}}</div>
      <div class="introduce item">{{item.introduce}}</div>
      <div class="state box"
           v-if="item.type==='registration'"
           :class="{has:item.state}">{{state}}
      </div>
      <div class="operate box">{{item.operateContent}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DoctorItem',
  props: {
    item: Object
  },
  computed: {
    state () {
      let state = '无号'
      if (this.item.state) {
        state = '有号'
      }
      return state
    }
  },
  methods: {
    clickDoctor () {
      this.$emit('click-doctor', this.item.id)
    }
  }
}
</script>
<style scoped lang='scss'>
@import '~style/variable.scss';

.doctor-item {
  $height: 1.5rem;
  width: 100%;
  height: $height;
  background: white;
  border-bottom: 1px solid $border-color;
  display: flex;
  .head-portrait {
    width: $height;
    height: $height;
    background-size: $height;
    background-image: url(~assets/doctor_woman.jpg);
    &.man {
      background-image: url(~assets/doctor_man.jpg);
    }
  }
  .content {
    position: relative;
    flex-grow: 1;
    height: $height;
    box-sizing: border-box;
    padding: 0.2px;
    padding-top: 0.1px;
    vertical-align: top;
    .name {
      font-weight: bold;
    }
    .item {
      margin: 0.1rem;
    }
    .box {
      position: absolute;
      padding: 0.1rem;
      right: 0.2px;
      color: white;
    }
    .state {
      top: 3px;
      background: black;
      &.has {
        background: green;
      }
    }
    .operate {
      top: 3px;
      background: green;
    }
  }
}
</style>
