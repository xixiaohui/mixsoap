<template>
  <div>
    <md-card>
      <md-card-media>
        <img src="../assets/card-example.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">枫桥夜泊</div>
        <div class="md-subhead">张继</div>
      </md-card-header>



      <md-card-content>
        月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。
      </md-card-content>

      <md-card-actions>
        <md-button>详情</md-button>
<!--        <md-button>更多</md-button>-->
      </md-card-actions>
    </md-card>
    <!--    -->
    <!--    <md-card>-->
    <!--      <md-card-header>-->
    <!--        <div class="md-title">Card without hover effect</div>-->
    <!--      </md-card-header>-->

    <!--      <md-card-content>-->
    <!--        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.-->
    <!--      </md-card-content>-->

    <!--      <md-card-actions>-->
    <!--        <md-button>Action</md-button>-->
    <!--        <md-button>Action</md-button>-->
    <!--      </md-card-actions>-->
    <!--    </md-card>-->

    <!--    <md-card md-with-hover>-->
    <!--      <md-ripple>-->
    <!--        <md-card-header>-->
    <!--          <div class="md-title">Card with hover effect</div>-->
    <!--          <div class="md-subhead">It also have a ripple</div>-->
    <!--        </md-card-header>-->

    <!--        <md-card-content>-->
    <!--          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.-->
    <!--        </md-card-content>-->

    <!--        <md-card-actions>-->
    <!--          <md-button>Action</md-button>-->
    <!--          <md-button>Action</md-button>-->
    <!--        </md-card-actions>-->
    <!--      </md-ripple>-->
    <!--    </md-card>-->
  </div>
</template>

<style lang="scss" scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.md-card-example {
  .md-subhead {
    .md-icon {
      $size: 16px;

      width: $size;
      min-width: $size;
      height: $size;
      font-size: $size !important;
    }

    span {
      vertical-align: middle;
    }
  }

  .card-reservation {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .md-icon {
      margin: 8px;
    }
  }

  .md-button-group {
    display: flex;

    .md-button {
      min-width: 60px;
      border-radius: 2px;
    }
  }
}
</style>

<script>
export default {
  name: 'LayoutCards'
}
</script>