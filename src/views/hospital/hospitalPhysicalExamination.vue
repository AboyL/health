<template>
  <div class="container">
    <Header :title="headerTitle">
    </Header>
    <div class="list">
      <div class="item"
           v-for="item of list"
           :key="item.key"
           @click="goDetail(item.key)">
        <div class="img">
          <img :src="item.img"
               alt="">
        </div>
        <div class="box">
          <div>{{item.name}}</div>
          <!-- <div class="price">￥：{{item.price}}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from 'components/layout/Header.vue'
import HospitalService from 'service/hospital.service.js'
import util from 'util'

export default {
  name: 'hospitalPhysicalExamination',
  components: {
    Header
  },
  data () {
    return {
      headerTitle: '健康体检',
      list: []
    }
  },
  methods: {
    goDetail (key) {
      this.$router.push({ name: 'hospitalPhysicalExaminationDetail', params: { key: key } })
    }
  },
  async mounted () {
    let list = await HospitalService.getPhysicalExaminationList()
    if (list.status) {
      this.list = list.data.physicalExamination
    } else {
      util.warningMessage({
        message: '加载失败'
      })
    }
    console.log(list)
  }
}
</script>
<style scoped lang='scss'>
.list {
  .item {
    padding: 0.1rem;
    margin: 0.1rem;
    background: white;
    > div {
      display: inline-block;
    }
    .img {
      $size: 2rem;
      img {
        width: $size;
        height: $size;
      }
    }
    .box {
      float: right;
      vertical-align: top;
      font-size: 0.3rem;
      margin-right: .2rem;
      line-height: .7rem;
      height: .7rem;
      .price {
        color: orange;
      }
    }
  }
}
</style>
