<script>
  export default {
    created () {
      // 调用API从本地缓存中获取数据
      // const logs = wx.getStorageSync('logs') || []
      // logs.unshift(Date.now())
      // wx.setStorageSync('logs', logs)
    }
  }
</script>

<style lang="less">
  @import "./common/less/base";
  .container {
    height: 100vh;
    width: 100vw;
    font-size: @32px;
  }
  /* this rule will be remove */
  /** {*/
    /*transition: width 2s;*/
    /*-moz-transition: width 2s;*/
    /*-webkit-transition: width 2s;*/
    /*-o-transition: width 2s;*/
  /*}*/
</style>
