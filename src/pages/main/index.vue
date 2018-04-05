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
  import {ajax} from '../../utils/ajax'
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
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    },
    mounted: function () {
    },
    methods: {
      getUserInfo () {
        ajax('/testapi').then(data => {
          this.list = data.swiperImages
          // 调用登录接口
          wx.login({
            success: () => {
              wx.getUserInfo({
                success: (res) => {
                  this.userInfo = res.userInfo
                  this.list.push({
                    url: this.userInfo.avatarUrl
                  })
                  this.list = this.list.reverse()
                }
              })
            }
          })
        })
      },
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
    padding-bottom: @98px;
  }
</style>
