<template>
<div>
  <el-cascader :options="options"
               class="cascader"
               v-model="city"
               @active-item-change="handleItemChange"></el-cascader>
</div>
</template>
<script>
export default {
  name: 'CitysCascader',
  components: {
  },
  data () {
    return {
      city: [],
      options: [{
        label: '江苏',
        value: '江苏',
        children: [
          {
            label: '南京',
            value: '南京',
            children: [
              {
                label: '南京',
                value: '南京'
              }
            ]
          }
        ]
      }, {
        label: '湖南',
        value: '湖南',
        children: [
          {
            label: '长沙',
            value: '长沙'
          }
        ]
      }]
    }
  },

  methods: {
    handleItemChange (val) {
      console.log('active item:', val)
    }
  }
}
</script>
<style scoped lang='scss'>
.cascader {
  width: 100%;
}
</style>
