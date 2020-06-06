<template>
  <!-- 添加/编辑地址页面 -->
  <div class="container" v-if="options">
    <!-- 通用头部 -->
    <CommonHeader :title="options.title" />

    <!-- 表单 -->
    <AddressForm :form="options.form" />

    <!-- 提交按钮 -->
    <AddressBtns
      :form="options.form"
      :field="options.field"
    />

    <!-- 搜索定位弹窗 -->
    <AddressPositionPopup
      :city="GEO_CITY"
      @addressAddPopupLocation="(address) => (options.form.address = address)"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { AddressModel } from 'models/address';

import CommonHeader from 'components/header/common';
import AddressForm from 'components/addressAddEdit/form';
import AddressBtns from 'components/addressAddEdit/btns';
import AddressPositionPopup from 'components/addressAddEdit/positionPopup';

export default {
  name: 'AddressAddEdit',

  props: {
    options: Object,
    tag: String
  },

  components: {
    CommonHeader,
    AddressForm,
    AddressBtns,
    AddressPositionPopup
  },

  computed: {
    ...mapGetters(['GEO_CITY'])
  },

  mounted () {
    if (!this.options) {
      this.$router.go(-1);
      return;
    }

    this.addressModel = new AddressModel();
    this.busEvent();
  },

  methods: {
    busEvent () {
      const { $bus } = this;

      $bus.$on('addAddress', (data) => this.addAddress(data));
      $bus.$on('editAddress', (data) => this.editAddress(data));
      $bus.$on('removeAddress', (data) => this.removeAddress(data));
    },

    addAddress (data) {
      this.addressModel
        .addAddress(data)
        .then((res) => {
          const conf = {
            position: 'top'
          }

          if (res && res.code === 0) {
            this.$bus.$emit('hanldeSetAdress', res.data);
          }

          conf.message = res.data.msg;
        })
        .catch((error) => console.log(error));
    },

    editAddress (data) {
      this.addressModel
        .editAddress(data)
        .then((res) => {
          const conf = {
            position: 'top'
          }

          if (res && res.code === 0) {
            this.$bus.$emit('hanldeSetAdress', res.data);
          }
          conf.message = res.data.msg;
        })
        .catch((error) => console.log(error));
    },

    removeAddress (data) {
      this.addressModel
        .removeAddress(data)
        .then((res) => {
          const conf = {
            position: 'top'
          }

          if (res && res.code === 0) {
            this.$bus.$emit('hanldeSetAdress', res.data);
          }

          conf.message = res.data.msg;
        })
        .catch((error) => console.log(error));
    }
  }
};
</script>
