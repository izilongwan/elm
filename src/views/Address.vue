<template>
  <!-- 我的地址 -->
  <div class="container">
    <!-- 头部 -->
    <CommonHeader title="我的地址" />

    <!-- 我的地址列表滚动区域 -->
    <AddressScrollWrapper :address="address" />

    <!-- 添加地址按钮 -->
    <AddressAddBtn />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { AddressModel } from 'models/address';

import CommonHeader from "components/header/common";
import AddressScrollWrapper from 'components/scrollWrapper/address';
import AddressAddBtn from 'components/address/addBtn';
import { LOCAL_TOKEN } from '@/config'

export default {
  name: 'Address',
  components: {
    CommonHeader,
    AddressScrollWrapper,
    AddressAddBtn
  },

  data () {
    return {
      address: [],
      t: null
    }
  },

  mounted () {
    this.addressModel = new AddressModel();
    this.getAddress();
    this.$bus.$on('hanldeSetAdress', (address) => this.address = address);
  },

  methods: {
    getAddress () {
      const u_id = localStorage.getItem(LOCAL_TOKEN);

      this.addressModel
        .getAddress({ u_id })
        .then(res => {
          if (res && res.code === 0) {
            this.address = res.data;
          }
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
