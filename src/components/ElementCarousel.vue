<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">

<!--      <h3 class="medium">{{ item }}</h3>-->
      <LayoutCards></LayoutCards>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import LayoutCards from '@/components/LayoutCards.vue'

export default {
  name: "ElementCarousel",
  data: function (){
    return {

      "message":{
        "title":"test",
        "des":"ringtone 2021",
        "url":"https://www.google.com"
      },
    }

  },
  components:{
    LayoutCards
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>