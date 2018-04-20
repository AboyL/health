<template>
<div>
  <div class="content-box">
      <el-input 
        v-for="item of inputList"
        v-model="formData[item.model]" 
        :placeholder="item.placeholder" 
        class="single-line"
        :key="item.model"
      >
      </el-input>
      <el-button 
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
  name: "SingleLineContainer",
  props:{
    inputList:{
      type:Array,
      required:true,
    },
    buttonContent:{
      type:Object,
      required:true,      
    }
  },
  data (){
    return {
    }
  },
  computed : {
    formData:function(){
      let data={};
      for(let d of this.inputList){
        data[d.model]=''
      }
      return data;
    }
  },
  methods :{
    submit:function(){
      this.$emit('submit',this.formData);
    }
  }
};
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
    .single-button {
      width: 80%;
    }
  }
</style>