<template>
  <div class="container-content">
    <div class="bar-info">
      <img class="avatar" :src="userInfo.avatarUrl" />
      <div class="nickname">
        {{userInfo.nickName}}
      </div>
    </div>
    <div class="count" v-if="data.count">
      我已去過消息列表{{data.count}}次了
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    components: {
    },
    data () {
      return {
        userInfo: {}
      }
    },
    computed: {
      ...mapState(['account', 'data'])
    },
    created () {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    },
    mounted: function () {
    },
    methods: {
      getUserInfo () {
        this.userInfo = this.account
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/base";
  .bar-info {
    margin-top: @100px;
    width: 100%;
    text-align: center;
    .avatar {
      width: @220px;
      height: @220px;
      border-radius: 50%;
    }
    .nickname {
      margin-top: @20px;
      font-size: @32px;
      text-align: center;
    }
  }
  .count {
    margin-top: @20px;
    width: 100%;
    text-align: center;
  }
</style>
