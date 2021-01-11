<template>
  <md-content>
    <div class="footerVideo">
      <WelcomeVideo></WelcomeVideo>
    </div>
  </md-content>

</template>

<script>
import WelcomeVideo from './WelcomeVideo'
export default {
  name: "Foot",
  components:{
    WelcomeVideo,
  }
}
</script>

<style lang="scss" scoped>
.md-content {
  //width: 100%;
  display: flex;
  padding: 50px;
}

.footerVideo{
  margin: auto;
  border-radius: 20px;
}

</style>