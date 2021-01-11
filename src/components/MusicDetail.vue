<template>
  <div class="details">

    <md-toolbar class="md-primary">
      <h3 class="md-title">Welcome to oddfee.</h3>
    </md-toolbar>

    <md-divider></md-divider>


    <div class="md-layout md-gutter container">

      <div class="md-layout-item md-size-15"></div>
      <div class="md-layout-item">
        <MusicDetailContent :music="this.$data.music"></MusicDetailContent>
      </div>
      <div class="md-layout-item md-size-15"></div>

    </div>

    <Foot></Foot>
  </div>
</template>

<script>
import Vue from 'vue'
import Foot from './Foot'
import MusicDetailContent from './MusicDetailContent'


export default {
  name: "MusicDetail",
  components:{
    Foot,
    MusicDetailContent
  },
  data:function (){

    return {
      music:{},
    }
  },
  methods:{

    getEventBusMsg:function (){

    }
  },
  mounted() {
    console.log("Music Detail mounted");

    // let data = JSON.parse(this.$route.query.music)
    // Vue.set(this.$data,"music",data)

  },

  created() {
    console.log("Music Detail created...2");

  },
}
</script>

<style lang="scss" scoped>


.details{
  align-content: center;
}

.container{
  margin-top: 10px;
  margin-bottom: 10px;
}

.md-layout-item {
  &:nth-child(1) {
    background: md-get-palette-color(white, 300);
  }
  &:nth-child(2) {
    background: md-get-palette-color(white, 400);
  }
  &:nth-child(3) {
    background: md-get-palette-color(gray, 500);
  }
}

</style>