<template>
  <div id="app">
    <h1>Welcome to mixsoap.</h1>

    <RegularButtons />
  </div>
</template>

<script>
import RegularButtons from './components/RegularButtons.vue'

export default {
  name: 'App',
  components: {
    RegularButtons
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
