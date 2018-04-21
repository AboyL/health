/*
 * @Author: L
 * @Date: 2018-04-21 15:54:33
 * @Last Modified by: L
 * @Last Modified time: 2018-04-21 19:36:05
 */
<template>
<div>
  <div class="content-box">
    <template
        v-for="item of singleLineList"
    >
    <div class="single-line-div single-line"
        :key="item.model"
        v-if="item.type==='div'"
    >
    {{item.content}}
    </div>
      <el-input
        v-model.trim="formData[item.model]"
        v-if="item.type==='input'"
        class="single-line"
        :placeholder="item.placeholder"
        :type="item.inputType?item.inputType:'text'"
        :key="item.model"
      >
      </el-input>
    </template>
      <el-button
      v-if="buttonContent"
      type="success"
      round
      class="single-button"
      @click="submit"
      >{{buttonContent.text}}
      </el-button>
    </div>
</div>
</template>

<script>
export default {
  name: 'SingleLineContainer',
  props: {
    singleLineList: {
      type: Array,
      required: true
    },
    buttonContent: {
      type: Object
    }
  },
  data () {
    return {}
  },
  computed: {
    formData: function () {
      let data = {}
      for (let d of this.singleLineList) {
        if (d.type === 'input') {
          data[d.model] = ''
        }
      }
      return data
    }
  },
  methods: {
    submit: function () {
      this.$emit('submit', this.formData)
    }
  }
}
</script>

<style scoped lang='scss'>
.content-box {
  padding-top: 0.5rem;
  margin-bottom: 50px;
  text-align: center;
  .single-line {
    width: 80%;
    margin-bottom: 0.35rem;
  }
  .single-line-div {
    line-height: 40px;
    height: 40px;
    text-align: left;
    margin: 0 auto;
    padding-left: 15px;
    font-size: 0.4rem;
  }
  .single-button {
    width: 80%;
  }
}
</style>
