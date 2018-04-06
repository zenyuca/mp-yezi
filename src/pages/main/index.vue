<template>
  <div class="container">
    <c-index v-if="currentTab === 1"></c-index>
    <c-msg v-if="currentTab === 2"></c-msg>
    <c-sign v-if="currentTab === 3"></c-sign>
    <c-me v-if="currentTab === 4"></c-me>
    <c-nav @changeDone="changeTabDone"></c-nav>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import cNav from '../../components/cNav'
  import cMe from '../../components/cMe'
  import cIndex from '../../components/cIndex'
  import cMsg from '../../components/cMsg'
  import cSign from '../../components/cSign'

  export default {
    components: {
      cNav,
      cMe,
      cIndex,
      cMsg,
      cSign
    },
    data () {
      return {
        currentTab: 1
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
      changeTabDone (tab) {
        this.currentTab = tab.type
      }
    }
  }
</script>

<style lang="less">
  @import "../../common/less/base";
  .container-content {
    float: left;
    width: 100%;
    padding-bottom: @120px;
    &.isIphoneX {
      padding-bottom: @170px;
    }
  }
</style>
