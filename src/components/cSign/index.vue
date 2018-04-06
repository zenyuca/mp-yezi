<template>
  <div class="container-content" :class="{'isIphoneX': data.isIphoneX}">
    签到
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    components: {
    },
    data () {
      return {
      }
    },
    created () {
    },
    mounted: function () {
    },
    computed: {
      ...mapState(['data'])
    },
    methods: {
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/base";

</style>
