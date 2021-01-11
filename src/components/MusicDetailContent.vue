<template>

  <div>

    <md-card>
      <md-card-media>
        <!--<img src="../assets/card-example.jpg" alt="People">-->
      </md-card-media>
      <md-card-header>
        <div class="md-title">{{ music.music.title }}</div>
        <div class="md-subhead">{{ music.music.des }}</div>
      </md-card-header>

      <md-card-content>
        <md-button class="md-raised md-accent" @click="download">download</md-button>
        <AudioTrack :url="music.music.url"></AudioTrack>
      </md-card-content>
    </md-card>

<!--    <div>-->
<!--      <h1>{{ count }}</h1>-->
<!--      <button @click="addCount"><strong>click me </strong></button>-->
<!--      <h1>{{ storeMusic }}</h1>-->
<!--      <h1>{{ currentmusic }}</h1>-->
<!--    </div>-->


  </div>

</template>

<script>
import Vue from "vue";
import AudioTrack from './AudioTrack'
import saveAs from 'file-saver'

export default {
  name: "MusicDetailContent",

  components:{
    AudioTrack,
  },

  data(){
    return {
      music:this.$store.state.music
    }
  },

  watch:{
    "this.$store.state.music"(){
      this.music = this.$store.getters.mymusic
    }
  },
  methods:{

    addCount:function (){
      this.$store.commit('increment')
    },

    download:function (){
      var FileSaver = require('file-saver');

      FileSaver.saveAs(this.music.music.url)
      // console.log("download" + this.music.music.url)
    }
  },
  computed:{
    count(){
      return this.$store.state.count
    },
    storeMusic(){
      return this.$store.state.music
    }
  },
  created() {

    Vue.set(this.$data,'music',this.storeMusic)
  }
}
</script>

<style lang="scss" scoped>
.md-card {
  //width: 320px;
  //height: 400px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  float: left;
}
</style>