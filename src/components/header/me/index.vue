<template>
  <!-- 我的 头部 -->
  <header class="header">
    <!-- 头像 -->
    <div class="img-wrap"></div>
    <div class="info">
      <div class="cell-one">
        <p
          class="nickname"
          v-if="userDatas.nickname"
        >{{userDatas.nickname}}</p>
        <p class="title" v-else>登录 / 注册</p>
        <span class="icon-right">
          <i class="fa fa-angle-right"></i>
        </span>
      </div>
      <div class="cell-two">
        <i class="fa fa-mobile"></i>
        <span
          class="phone"
          v-if="userDatas.phone"
        >{{encriptPhone(userDatas.phone)}}</span>
        <span class="tip" v-else>登录之后即可享更多特权</span>
      </div>
    </div>
  </header>
</template>

<script>
import tools from 'utils/tools';

export default {
  name: 'IndexMeHeader',

  props: {
    userDatas: Object
  },

  methods: {
    encriptPhone: tools.encriptPhone
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/variables.styl';

.header {
  flex-row();
  background-color: $defaultBg;
  padding: 3rem 2rem;
  color: #fff;

  .img-wrap {
    width: 5rem;
    height: 5rem;
    background: url('~images/avatar.png') 0 0 / 5rem 30rem;
    border-radius: 50%;
  }

  .info {
    flex: 1;
    margin-left: 1rem;
    overflow: hidden;

    .cell-one {
      position: relative;
      font-weight: bold;
      line-height: 3rem;
    }

    .nickname {
      ellipsis();
      width: 80%;
      font-size: 2rem;
    }

    .icon-right {
      position: absolute;
      top: 0.7rem;
      right: 0;
      font-size: 2.5rem;
    }

    .cell-two {
      position: relative;
      margin-top: 1rem;

      .fa-mobile {
        font-size: 1.8rem;
      }

      .tip, .phone {
        ellipsis();
        margin-left: 1rem;
        font-size: 1.6rem;
      }
    }
  }
}
</style>