<template>
  <div id="app">
    <h1>Welcome to oddfee.</h1>

    <RegularButtons/>
    <md-divider></md-divider>

    <div v-for="n in 2" :key="n">
      <div v-if="n == 1">
        <LayoutCards></LayoutCards>
      </div>
    </div>
    <!--    <DialogCustom/>-->
  </div>
</template>

<script>
import RegularButtons from './components/RegularButtons.vue'
import LayoutCards from './components/LayoutCards.vue'
// import DialogCustom from './components/DialogCustom.vue'


// function echoTest(){
//   console.log("hello world.")
// }

export default {
  name: 'App',
  components: {
    RegularButtons,
    LayoutCards,
    // DialogCustom
  },
  created() {

    // console.log("hello world.")
    // this.$http.get('files/2020.json').then(response => {
    //
    //   const someData = response.body;
    //
    //   console.log(someData)
    //
    // }, response =>{
    //   //error callback
    //   console.log(response.body)
    // })
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
