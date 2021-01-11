<template>
  <div class="tagBlock">
<!--    <div>-->
<!--      <md-button href="">ODD</md-button>-->
<!--      <md-button :md-ripple="false">FEE</md-button>-->
<!--      <md-button class="md-primary">ODD</md-button>-->
<!--      <md-button class="md-accent">FEE</md-button>-->
<!--      <md-button disabled>Disabled</md-button>-->
<!--    </div>-->

    <div v-for="(item,index) in items" :key="index" class="tags">
      <md-button class="md-raised" @click="sendString">{{ item }}</md-button>
<!--      <md-button class="md-raised" :md-ripple="false">FEE</md-button>-->
<!--      <md-button class="md-raised md-primary">ODD</md-button>-->
<!--      <md-button class="md-raised md-accent">FEE</md-button>-->
<!--      <md-button class="md-raised" disabled>Disabled</md-button>-->
    </div>

<!--    <div>-->
<!--      <md-button class="md-dense md-primary">odd</md-button>-->
<!--      <md-button class="md-dense md-raised md-primary">fee</md-button>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "RegularButtons",

  props: {
    items: Array,
  },

  methods:{

    sendString: function (e){
      this.$emit("childByValue",e.target.innerText)
    }
  }

}
</script>

<style lang="scss" scoped>
.tagBlock{
  margin: 10px 200px;
}
.tags{
  display: inline;
}

.md-raised{
  text-transform: none;
}

</style>