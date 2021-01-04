<template>
  <div>
    <div>

      <md-button href="">ODD</md-button>
      <md-button :md-ripple="false">FEE</md-button>
      <md-button class="md-primary">ODD</md-button>
      <md-button class="md-accent">FEE</md-button>
<!--      <md-button disabled>Disabled</md-button>-->
    </div>

    <div>

      <md-button class="md-raised">ODD</md-button>
      <md-button class="md-raised" :md-ripple="false">FEE</md-button>
      <md-button class="md-raised md-primary">ODD</md-button>
      <md-button class="md-raised md-accent">FEE</md-button>
<!--      <md-button class="md-raised" disabled>Disabled</md-button>-->
    </div>

    <div>
      <md-button class="md-dense md-primary">odd</md-button>
      <md-button class="md-dense md-raised md-primary">fee</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegularButtons"
}
</script>

<style scoped>

</style>