<template>
  <div class="btn-wrap">
    <!-- 新增地址确认按钮 -->
    <button
      v-if="field === 'add'"
      class="btn add"
      @click="checkForm(field)"
    >确 定</button>

    <!-- 编辑地址按钮组 -->
    <template v-else>
      <button
        class="btn remove"
        @click="handleConfirmAction"
      >删 除</button>
      <button class="btn save" @click="checkForm(field)">保 存</button>
    </template>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui';
import tools from 'utils/tools';
import { LOCAL_TOKEN } from '@/config'

const msg = {
  1001: '请填写姓名',
  1002: '请填写手机号',
  1003: '手机号长度为11位数字',
  1004: '手机号不存在',
  1005: '请填写地址'
}

export default {
  name: 'AddressAddEditBtns',
  props: {
    form: Object,
    field: String
  },

  methods: {
    showMsg (msg) {
      Toast({
        message: msg,
        position: 'bottom'
      });
    },

    checkForm (field) {
      const form = this.form;

      if (!form.name) {
        return this.showMsg(msg[1001]);
      }

      if (!form.phone) {
        return this.showMsg(msg[1002]);
      }

      if (form.phone.length !== 11) {
        return this.showMsg(msg[1003]);
      }

      if (!tools.checkPhoneNumber(form.phone)) {
        return this.showMsg(msg[1004]);
      }

      if (!form.address) {
        return this.showMsg(msg[1005]);
      }


      this.handleBtns(field);
    },

    handleBtns (field) {
      const data = {};

      data.u_id = localStorage.getItem(LOCAL_TOKEN);
      data.address = JSON.stringify(this.form);

      switch (field) {
        case 'add':
          this.handleAddressBtn(data);
          break;
        case 'edit':
          data.addr_id = this.form.addr_id;
          this.handleEditAddressBtn(data);
          break;
        default:
          break;
      }
      this.$emit('handleAddressPopup', false);
      this.$router.go(-1);
    },

    handleAddressBtn (data) {
      this.$bus.$emit('addAddress', data);
    },

    handleEditAddressBtn (data) {
      this.$bus.$emit('editAddress', data);
    },

    handleConfirmAction () {
      MessageBox.confirm('确定删除该地址?')
        .then(action =>
          action && this.handleRemoveAddressBtn()
        );
    },

    handleRemoveAddressBtn () {
      const data = {};

      data.addr_id = this.form.addr_id;
      data.u_id = localStorage.getItem(LOCAL_TOKEN);

      this.$bus.$emit('removeAddress', data);
      this.$emit('handleAddressPopup', false);
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.btn-wrap {
  margin-top: 2rem;
  text-align: center;
}

.btn {
  height: 4rem;
  font-size: 1.8rem;

  &.add {
    width: 90%;
    background-color: $defaultGreen;
    color: #ffffff;
  }

  &.remove, &.save {
    width: 40%;
  }

  &.remove {
    margin-right: 3rem;
    border: 1px solid #eee;
    background-color: #ddd;
    color: #666;
  }

  &.save {
    background-color: $defaultGreen;
    color: #ffffff;
  }
}
</style>
