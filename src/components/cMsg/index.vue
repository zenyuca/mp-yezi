<template>
  <div class="container-content">
    进入消息列表{{data.count}}次
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
      if (!this.data.count) {
        this.data.count = 1
      } else {
        this.data.count++
      }
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
