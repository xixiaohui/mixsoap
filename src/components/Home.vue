<template>
  <div id="home">
    <div id="myheader">
      <md-toolbar class="md-primary">
        <h3 class="md-title">Welcome to oddfee.</h3>
      </md-toolbar>

    </div>
    <RegularButtons :items="files" v-on:childByValue="setData"></RegularButtons>

    <md-divider></md-divider>
<!--    <div>-->
<!--      <h1>{{ count }}</h1>-->
<!--      <button @click="addCount"><strong>click me </strong></button>-->
<!--    </div>-->
<!--    <md-divider></md-divider>-->
    
    <div class="md-layout md-gutter container">
      <div class="md-layout-item md-size-15">
        <!--        <ListMenu></ListMenu>-->
      </div>
      <div class="md-layout-item">
        <LayoutCards v-for="(item,idx) in this.$data.message" :key="idx" :music="item"></LayoutCards>

        <!--<ElementCarousel v-for="(item,idx) in this.$data.message" :key="idx" :music="item"></ElementCarousel>-->
      </div>
      <div class="md-layout-item md-size-15"></div>
    </div>

    <!--    <DialogCustom/>-->

    <Foot></Foot>
  </div>

</template>

<script>
import RegularButtons from './RegularButtons.vue'
import LayoutCards from './LayoutCards.vue'
import Vue from 'vue'
import Foot from "@/components/Foot"


export default {
  name: 'Home',
  components: {
    RegularButtons,
    LayoutCards,
    Foot

  },
  data: function () {
    return {
      message: {},
      files:['2020', 'Airtel', 'Alarm', 'Animal', 'Arabic', 'Attitude', 'Bengali',
        'BGM', 'Bhojpuri', 'Blackberry', 'Bollywood', 'Call', 'Christmas', 'Classical',
        'Corona', 'DeshBhakti', 'Dialogue', 'Electronica', 'English', 'Funny', 'Google',
        'Infinix', 'Instrumental', 'iPhone', 'IPL', 'Islamic', 'Joker', 'Kannada', 'LG',
        'Love', 'Malayalam', 'Marathi', 'Mashup', 'MoodOff', 'Motorola', 'Music', 'Nokia',
        'Oneplus', 'Oppo', 'PakistaniSong', 'Poetry', 'PSL5', 'Punjabi', 'Remix', 'Romantic',
        'Sad', 'Samsung', 'Scary', 'SMS', 'Sounds', 'Spanish', 'Tamil', 'Techno', 'Telugu',
        'TikTok', 'Vivo', 'Warning', 'Xiaomi']
    }
  },

  computed:{
    count(){
      return this.$store.state.count
    }
  },

  methods:{
    addCount:function (){
      this.$store.commit('increment')
    },

    setData (fileName){

      var jsonFilename = 'files/'+ fileName + '.json'
      // alert("Click button" + jsonFilename)

      this.$http.get(jsonFilename).then(response => {

        Vue.set(this.$data, 'message', response.body);
        // console.log(this.$data.message)

      }, response => {
        //error callback
        console.log(response.body)
      })
    }

  },

  mounted() {

  },

  created: function () {

    this.setData("2020")

  },

}

</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  //margin-top: 60px;
}

.md-toolbar + .md-toolbar {
  margin-top: 16px;
}

#myheader {
  text-align: center;
}

.container{
  margin-top: 10px;
  margin-bottom: 10px;
}

.md-layout-item {




  &:nth-child(1) {
    background: md-get-palette-color(gray, 300);
  }
  &:nth-child(2) {
    background: md-get-palette-color(white, 400);
  }
  &:nth-child(3) {
    background: md-get-palette-color(gray, 500);
  }
}
</style>