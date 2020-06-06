<template>
  <router-link
    class="add-address"
    :to="{name: 'addressAdd', params: { options }}"
  >
    <i class="fa fa-plus-circle"></i>
    <button class="add-btn">新增收货地址</button>
  </router-link>
</template>

<script>
import tools from 'utils/tools';

export default {
  name: 'AddressAddBtn',
  data () {
    return {
      opts: {
        field: 'add',
        title: '添加地址',
        form: {
          name: '',
          phone: '',
          address: '',
          houseNumber: '',
          sex: '先生',
          tag: ''
        }
      },
      options: {}
    }
  },

  activated () {
    this.options = tools.deepClone(this.opts);
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.add-address {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  padding: 1.5rem 2rem;
  text-align: center;

  .fa {
    font-size: 2.5rem;
    vertical-align: middle;
    color: $defaultBg;
  }

  .add-btn {
    font-size: 1.8rem;
    margin-left: 1rem;
    color: $defaultBg;
  }
}
</style>