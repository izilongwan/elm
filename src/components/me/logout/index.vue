<template>
  <p class="logout" @click="handleConfirmAction">退出登录</p>
</template>

<script>
import { MessageBox } from 'mint-ui';
import { LOCAL_TOKEN } from '@/config'

export default {
  name: 'IndexMeLogout',

  methods: {
    handleConfirmAction () {
      MessageBox.confirm('确定退出登录？')
        .then(action =>
          action && this.logout()
        )
    },

    logout () {
      localStorage.removeItem(LOCAL_TOKEN);
      setTimeout(() =>
        this.$router.push('/login')
        , 1000);
    }
  }
}
</script>

<style lang="stylus" scoped>
.logout {
  padding: 2rem;
  background-color: #fff;
  text-align: center;
  font-size: 1.6rem;
  color: #f44;
}
</style>
