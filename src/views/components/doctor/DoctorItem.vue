<template>
  <div class="doctor-item">
    <div class="head-portrait"></div>
    <div class="content">
      <div class="name item">哈哈哈</div>
      <div class="position item">主治医生</div>
      <div class="introduce item">擅长看病</div>
      <div class="state">有号</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DoctorItem',
  props: {
    detail: Object
  }
}
</script>
<style scoped lang='scss'>
.doctor-item {
  $height: 1.5rem;
  width: 100%;
  height: $height;
  background: white;
  display: flex;
  .head-portrait {
    width: $height;
    height: $height;
    background: url(~assets/doctor_man.jpg);
    background-size: $height;
  }
  .content {
    position: relative;
    flex-grow: 1;
    height: $height;
    box-sizing: border-box;
    padding: .2px;
    padding-top: .1px;
    vertical-align: top;
    .name {
      font-weight: bold;
    }
    .item {
      margin: .1rem;
    }
    .state {
      position: absolute;
      padding: .1rem;
      top: 3px;
      right: .2px;
      background: green;
      color: white;
    }
  }
}
</style>
