<template>
  <div class="box-me">
    <div class="content-wrapper">
      Hello
    </div>
    <cnav></cnav>
  </div>
</template>

<script>
  import {ajax} from '../../utils/ajax'
  import cnav from '../../components/cnav'

  export default {
    components: {
      cnav
    },
    data () {
      return {
        userInfo: {}
      }
    },
    created () {
      wx.setNavigationBarTitle({
        title: '我的'
      })
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#ffb844',
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      })
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    },
    mounted: function () {
    },
    methods: {
      getUserInfo () {
        wx.showNavigationBarLoading()
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
                  wx.hideNavigationBarLoading()
                }
              })
            }
          })
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/base";

</style>
