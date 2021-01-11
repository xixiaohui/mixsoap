<template>
  <md-card>
    <md-card-media>
      <!--<img src="../assets/card-example.jpg" alt="People">-->
    </md-card-media>
    <md-card-header>
      <div class="md-title">Welcome to oddfee.</div>
      <div class="md-subhead">Thank you for your coming.</div>
    </md-card-header>

    <md-card-content>
      <!--        <a :href="music.music.url">play</a>-->
      <VideoTrack ></VideoTrack>
    </md-card-content>
  </md-card>
</template>

<script>
import  VideoTrack from './VideoTrack'
export default {
  name: "WelcomeVideo",
  components:{
    VideoTrack
  }
}
</script>

<style scoped>

</style>