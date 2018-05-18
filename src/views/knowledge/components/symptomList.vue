<template>
    <div class="symptomList"
        >
      <div class="list">
        <div class="item"
             v-for="item of symptomList"
             :key="item.key"
             @click="goDetail(item.key)"
             >
          {{item.name}}
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'symptomList',
  props: {
    symptomList: Array
  },
  methods: {
    goDetail (key) {
      this.$emit('goDetail', {key})
    }
  }
}
</script>
<style scoped lang='scss'>
@import '~style/variable.scss';
.list {
  .item {
    padding: 0.2rem;
    margin: 0.1rem 0.2rem;
    border: 2px $border-color solid;
    border-radius: 0.1rem;
    height: $line;
    line-height: $line;
  }
}
</style>
