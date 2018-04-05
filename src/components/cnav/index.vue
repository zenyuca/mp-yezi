<template>
  <ul class="btn-footer btns">
    <li class="btn" :key="index" v-for="(btn, index) in footerTabs" @click="changeTab(btn)">
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
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    components: {},
    data () {
      return {
        footerTabs: []
      }
    },
    created () {
      console.log(this.tabs)
      console.log(this.getTabs)
      this.footerTabs = this.tabs
    },
    computed: {
      ...mapState(['tabs']),
      ...mapGetters(['getTabs'])
    },
    methods: {
      ...mapActions(['storeTabs']),
      changeTab (tab) {
        let target = ''
        for (let item of this.footerTabs) {
          item.on = false
          if (item.name === tab.name) {
            item.on = true
            target = item
          }
        }
        if (target) {
          wx.switchTab({
            url: target.route
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
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
    height: @98px;
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid #e4e4e4;
    z-index: 1;
    background-color: #fff;
    .btn {
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
