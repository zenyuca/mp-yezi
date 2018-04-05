<template>
  <div class="container">
    <div class="content-wrapper">
      <swiper class="bar-swiper" indicator-dots autoplay :interval="10000" duration
              indicator-color="rgba(255, 255, 255, .3)"
              indicator-active-color="rgba(210, 34, 34, .7)">
        <swiper-item :key="index" v-for="(item, index) of list">
          <img :src="item.url" class="slider-img" mode="aspectFill"/>
        </swiper-item>
      </swiper>
      <ul class="btn-type-1 btns">
        <li class="btn" :key="index" v-for="(btn, index) in btnType1" @click="toPage(btn)">
          <div class="icon-wrapper">
            <img class="newTag" v-if="btn.on" src="/static/images/index/new.png"/>
            <img class="icon" :src="btn.icon"/>
          </div>
          <div class="name-wrapper">
            <span class="name">{{ btn.name }}</span>
          </div>
        </li>
      </ul>
      <div class="cut-off-line"></div>
      <ul class="btn-type-2 btns">
        <div class="btn-title">
          <div class="line"></div>
          <div class="name">
            互动交流
          </div>
          <div class="line"></div>
        </div>
        <div style="overflow-x: auto">
          <div class="wrapper-li">
            <li class="btn" :key="index" v-for="(btn, index) in btnType2" @click="toPage(btn)">
              <div class="icon-wrapper">
                <img class="newTag2" v-if="btn.on" src="/static/images/index/new2.png"/>
                <img class="icon" height="100" :src="btn.icon"/>
              </div>
              <div class="name-wrapper">
                <span class="name">{{ btn.name }}</span>
              </div>
            </li>
          </div>
        </div>
      </ul>
      <!--<div class="cut-off-line"></div>-->
      <ul class="btn-type-3 btns" v-if="service">
        <div class="btn-title">
          <div class="line"></div>
          <div class="name">
            便民服务
          </div>
          <div class="line"></div>
        </div>
        <li class="btn" @click="go(['fwhService', {id: item.id}, {name: item.name}])" v-for="(item, i) in service"
            :key="i">
          <div class="icon-wrapper">
            <img class="icon" height="100" :src="item.url"/>
          </div>
        </li>
      </ul>
      <div class="cut-off-line" v-if="service"></div>
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
        cars: [],
        list: [],
        userInfo: {},
        btnType1: [
          {
            name: '签到',
            icon: '/static/images/index/type1/qd.png',
            url: '',
            on: false
          },
          {
            name: '积分抽奖',
            icon: '/static/images/index/type1/jfcj.png',
            menuId: 'menu_luckdraw',
            url: '',
            on: false
          },
          {
            name: '普惠商城',
            icon: '/static/images/index/type1/phsc.png',
            url: '',
            on: false
          },
          {
            name: '福利社',
            icon: '/static/images/index/type1/fls.png',
            menuId: 'menu_welfare',
            url: ``,
            on: false
          },
          {
            name: '同心缘',
            icon: '/static/images/index/type1/txy.png',
            url: '',
            on: false
          },
          {
            name: '活动中心',
            icon: '/static/images/index/type1/hdzx.png',
            url: ``,
            on: false
          },
          {
            name: '兴趣联盟',
            icon: '/static/images/index/type1/xqlm.png',
            url: '',
            on: false
          },
          {
            name: '网络学院',
            icon: '/static/images/index/type1/wlxy.png',
            url: '',
            on: false
          }
        ],
        btnType2: [
          {
            name: '在线咨询',
            icon: '/static/images/index/type2/zxzx.png',
            url: ``
          },
          {
            name: '求职招聘',
            icon: '/static/images/index/type2/qzzp.png',
            menuId: 'menu_recruit',
            url: ``
          },
          {
            name: '投票选举',
            icon: '/static/images/index/type2/tpxj.png',
            menuId: 'menu_vote',
            url: ``
          },
          {
            name: '问卷调查',
            icon: '/static/images/index/type2/wjtc.png',
            menuId: 'menu_investigation',
            url: ``
          }
        ],
        btnType3: [
          {
            name: '出行服务',
            icon: '/static/images/index/type3/cxfw.png',
            url: ``
          },
          {
            name: '便捷服务',
            icon: '/static/images/index/type3/bjfw.png',
            url: ``
          },
          {
            name: '在线预约',
            icon: '/static/images/index/type3/zxyy.png',
            url: ``
          },
          {
            name: '媒体关注',
            icon: '/static/images/index/type3/mtgz.png',
            url: ``
          }
        ]
      }
    },
    created () {
      wx.setNavigationBarTitle({
        title: ''
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
      toPage (btn) {
        let url = btn.url
        if (url) {
          if (url.indexOf('/fwhpage') === 0) {
            window.location.href = `http://${window.location.host}${url}`
          } else if (url.indexOf('http') === 0) {
            window.location.href = url
          } else {
          }
        } else {
          wx.showToast({
            title: '该功能还在开发中……',
            icon: 'none',
            duration: 1000,
            mask: true
          })
        }
      },
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
  @type2TabWidth: @232px * 4;
  @type2JuWidth: @22px * 3;

  .cut-off-line {
    background-color: #F4F4F4;
    height: @20px;
    width: 100%;
    float: left;
  }
  .bar-swiper {
    height: @300px;
    .slider-img {
      width: 100%;
      height: 100%;
    }
  }
  .icon-wrapper {
    position: relative;
  }
  .newTag {
    width: @36px;
    height: @30px;
    position: absolute;
    right: @45px;
  }
  .newTag2 {
    position: absolute;
    left: 0;
    top: 0;
    width: @64px;
  }
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
  .ui-swiper-demo {
    padding: @26px @20px;
    box-sizing: border-box;
    background-color: #fff;
    .ui-swiper-container {
      .ui-swiper {
        .ui-swiper-box {
          padding: 0 @12px;
          box-sizing: border-box;
          &:last-child {
            margin-right: 0;
          }
          img {
            height: @366px;
            border-radius: @12px;
          }
        }
      }
    }
  }
  .btn-type-1 {
    float: left;
    &.btns {
      width: 100%;
      display: block;
      padding-top: @40px;
      box-sizing: border-box;
    }
    .btn {
      float: left;
      width: calc(~"100% / 4");
      margin-bottom: @40px;
      .name-wrapper {
        margin-top: @1px;
      }
      .icon {
        width: @88px;
        height: @88px;
      }
      .name {
        font-family: PingFangSC-Regular;
        font-size: @26px;
        color: #666666;
        letter-spacing: 0;
      }
    }
  }
  .btn-type-2 {
    width: 100%;
    float: left;
    overflow-x: hidden;
    padding: @24px @24px @2px @24px;
    box-sizing: border-box;
    display: block;
    .wrapper-li {
      width: calc(@type2TabWidth + @type2JuWidth);
    }
    .btn {
      /*float: left;*/
      display: inline-block;
      width: @232px;
      margin-right: @22px;
      margin-bottom: @22px;
      &:last-child {
        margin-right: 0;
      }
      .icon-wrapper {
        width: 100%;
        height: @232px;
        .icon {
          width: 100%;
          height: 100%;
          border-radius: @8px;
        }
      }
      .name-wrapper {
        margin-top: @24px;
      }
      .name {
        font-family: PingFangSC-Regular;
        font-size: @26px;
        color: #666666;
        text-align: center;
      }
    }
  }
  .btn-type-3 {
    width: 100%;
    float: left;
    padding: @24px @24px @2px @24px;
    box-sizing: border-box;
    display: block;
    .btn {
      float: left;
      width: calc(~"50% - " @11px);
      height: @184px;
      margin-right: @22px;
      margin-bottom: @22px;
      &:nth-child(2n + 1) {
        margin-right: 0;
      }
      .icon-wrapper {
        width: 100%;
        height: 100%;
        .icon {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .btn-title {
    text-align: center;
    margin-bottom: @24px;
    display: flex;
    align-items: center;
    justify-content: center;
    .line {
      flex: 1 @24px auto;
      background: #ff4f64;
      width: @24px;
      height: @4px;
    }
    .name {
      margin: 0 @14px;
      font-family: PingFangSC-Regular;
      font-size: @28px;
      color: #ff4f64;
      letter-spacing: 0;
      line-height: @28px;
    }
  }
</style>
