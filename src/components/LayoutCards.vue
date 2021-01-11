<template>
  <div>

    <md-card v-on:click.native="gotoDetails($event)" @mouseenter="changeActive($event)" @mousemove="removeActive($event)">
      <md-card-media>
        <!--        <img src="../assets/card-example.jpg" alt="People">-->
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ music.title }}</div>
        <div class="md-subhead">{{ music.des }}</div>
      </md-card-header>

      <md-card-content>
        <!--        {{ music.url }}-->
      </md-card-content>

      <md-card-actions>
        <!--        <md-button class="md-primary">play</md-button>-->
        <!--        <md-button v-on:click="gotoDetails">更多</md-button>-->
      </md-card-actions>

    </md-card>

  </div>
</template>

<style lang="scss" scoped>
.md-card {
  width: 300px;
  height: 200px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  float: left;

  cursor: pointer;
}

</style>

<script>

export default {
  name: 'LayoutCards',
  data:function (){
    return {

    }
  },

  props: {
    music: Object,
  },

  methods: {
    gotoDetails: function (event) {

      // let currentmusic = JSON.stringify(this.music)
      this.$router.push(
          {
            path: '/details',
            // query:{
            //   'music':currentmusic
            // }
          }
      )
      this.$store.commit('setMusic',{'music':this.music})
    },

    changeActive:function (e){
      console.log("鼠标移入了");
    },

    removeActive: function (e){
      console.log("鼠标移出了");
    }

  }
}
</script>