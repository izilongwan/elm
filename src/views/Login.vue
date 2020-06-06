<template>
  <!-- Login 登录页面 -->
  <div class="container">
    <!-- Login 登录 LOGO -->
    <LoginLogo />

    <!-- Login Form -->
    <LoginForm :form="form" />

    <!-- Login 用户协议 -->
    <LoginUserProtocol />

    <!-- Login 登录按钮 -->
    <LoginBtn
      :disabled="loginDisabled"
      @clickLoginBtn="clickLoginBtn"
    />
  </div>
</template>

<script>
import LoginLogo from 'components/login/logo';
import LoginForm from 'components/login/form';
import LoginBtn from 'components/login/btn';
import LoginUserProtocol from 'components/login/userProtocol';
import { LOCAL_TOKEN } from '@/config'
import tools from 'utils/tools';
import { LoginModel } from 'models/login';
import { log } from 'util';
import { Toast } from 'mint-ui'

export default {
  name: 'Login',
  components: {
    LoginLogo,
    LoginForm,
    LoginBtn,
    LoginUserProtocol
  },

  data () {
    return {
      form: {
        phone: '15000000000',
        code: '666666'
      },
      t: null,
      isFirst: false,
      isSpan: false,
      errorCodes: {
        1: '手机号长度为11位数字',
        2: '验证码长度为6位数字'
      }
    }
  },

  mounted () {
    this.loginModel = new LoginModel();
  },

  computed: {
    loginDisabled () {
      const { phone, code } = this.form;

      return !(phone && code);
    }
  },

  methods: {
    clickLoginBtn () {
      const { errorCodes, form } = this;
      const { phone, code } = form;
      const conf = {
        position: 'top',
      }

      if (phone.length !== 11) {
        conf.message = errorCodes[1];
        Toast(conf);
        return;
      }

      if (code.length !== 6) {
        conf.message = errorCodes[2];
        Toast(conf);
        return;
      }

      const data = { phone, code };

      this.smsLogin(data);
    },

    smsLogin (data) {
      this.loginModel
        .userLogin(data)
        .then(res => {
          const conf = {
            position: 'top',
          }

          if (res && res.code === 0) {
            const { u_id } = res.data;

            localStorage.setItem(LOCAL_TOKEN, u_id);
            this.$router.push('/home');
            conf.iconClass = 'mintui mintui-success';
          } else {
            conf.iconClass = 'mintui mintui-error'
          }

          conf.message = res.msg;
          Toast(conf);
        })
        .catch(err => console.log('err', err))
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  background-color: #fff;
}
</style>
