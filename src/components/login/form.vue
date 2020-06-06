<template>
  <div class="form">
    <!-- Login 登录手机输入框 -->
    <mt-field
      label="用户名"
      placeholder="请输入手机号"
      v-model="form.phone"
      :attr="{ maxlength: 11 }"
    ></mt-field>

    <mt-field
      label="验证码"
      placeholder="请输入验证码"
      v-model="form.code"
      :attr="{ maxlength: 6 }"
    ></mt-field>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    form: Object
  }
}
</script>

<style lang="stylus" scoped>
.form {
  margin: 8rem 4rem 3rem;
}
</style>
