<template>
  <!-- 我的页面 -->
  <div class="child-container">
    <!-- 头部 -->
    <IndexMeHeader :userDatas="userDatas" />

    <!-- 我的地址 -->
    <IndexMeMyAddress />

    <!-- 退出登录 -->
    <IndexMeMyLogout />
  </div>
</template>

<script>
import { IndexModel } from 'models/index';
import { LOCAL_TOKEN } from '@/config'
import IndexMeHeader from "components/header/me";
import IndexMeMyAddress from 'components/me/myAddress';
import IndexMeMyLogout from 'components/me/logout';

export default {
  name: 'IndexMe',
  components: {
    IndexMeHeader,
    IndexMeMyAddress,
    IndexMeMyLogout
  },

  data () {
    return {
      userDatas: {}
    }
  },

  mounted () {
    const u_id = localStorage.getItem(LOCAL_TOKEN);

    this.getUserInfo({ u_id });
  },

  methods: {
    getUserInfo (data) {
      new IndexModel()
        .getUserInfo(data)
        .then(res => {
          // console.log(res);
          if (res && res.code === 0) {
            this.userDatas = res.data;
          }
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
