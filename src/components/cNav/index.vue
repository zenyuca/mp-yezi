<template>
  <ul class="btn-footer btns" :class="{'isIphoneX': data.isIphoneX}">
    <li class="btn" :key="index" v-for="(btn, index) in footerTabs" @tap="changeTab(btn)">
      <div class="icon-wrapper">
        <img class="icon" v-if="!btn.on" :src="btn.icon"/>
        <img class="icon" v-if="btn.on" :src="btn.iconOn"/>
      </div>
      <div class="name-wrapper">
        <span class="name" :class="{'on': btn.on}">{{ btn.name }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    components: {},
    data () {
      return {
        isIphoneX: false,
        footerTabs: [
          {
            name: '主页',
            icon: '/static/images/index/msg.png',
            iconOn: '/static/images/index/msg-on.png',
            route: '/pages/index/main',
            on: false,
            type: 1
          },
          {
            name: '消息',
            icon: '/static/images/index/msg.png',
            iconOn: '/static/images/index/msg-on.png',
            route: '/pages/index/main',
            on: false,
            type: 2
          },
          {
            name: '签到',
            icon: '/static/images/index/sign.png',
            iconOn: '/static/images/index/sign-on.png',
            route: '/pages/index/main',
            on: false,
            type: 3
          },
          {
            name: '我的',
            icon: '/static/images/index/me.png',
            iconOn: '/static/images/index/me-on.png',
            route: '/pages/cme/main',
            on: false,
            type: 4
          }
        ]
      }
    },
    created () {
      this.init()
      this.changeTab(this.footerTabs[0])
    },
    computed: {
      ...mapState(['data'])
    },
    methods: {
      init () {
        let data = this.data
        wx.getSystemInfo({
          success: function (res) {
            if (res.model === 'iPhone X') {
              data.isIphoneX = true
            }
          }
        })
      },
      changeTab (tab) {
        let target = ''
        for (let item of this.footerTabs) {
          item.on = false
          if (item.name === tab.name) {
            item.on = true
            target = item
          }
        }
        wx.setNavigationBarTitle({
          title: target.name
        })
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#ffb844',
          animation: {
            duration: 400,
            timingFunc: 'easeIn'
          }
        })
        this.$emit('changeDone', target)
        // if (target) {
        //   wx.switchTab({
        //     url: target.route
        //   })
        // }
      }
    }
  }
</script>

<style lang="less">
  @import "../../common/less/base";
  .btns {
    display: flex;
    text-align: center;
    align-items: center;
    .btn {
      flex: 1;
      .icon-wrapper, .name-wrapper {
        width: 100%;
      }
      .icon {
        width: @40px;
        height: @40px;
      }
      .name {
        font-family: PingFangSC-Regular;
        font-size: @20px;
        color: #c0c0c0;
        letter-spacing: 0;
        &.on {
          color: #ff4f64;
        }
      }
    }
  }
  .btn-footer {
    height: @120px;
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid #e4e4e4;
    z-index: 1;
    background-color: #fff;
    display: flex;
    align-items: center;
    &.isIphoneX {
      height: @170px;
    }
    .btn {
      height: 100%;
      padding-top: @50px;
      .icon.wrapper, .name-wrapper {
        float: left;
        display: flex;
      }
      .name {
        flex: 1;
        display: inline;
      }
    }
  }
</style>
