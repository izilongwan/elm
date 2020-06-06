<template>
  <!-- 地址表单 -->
  <form class="form" v-if="form">
    <!-- 姓名 -->
    <mt-field
      label="姓名"
      placeholder="请输入姓名"
      :attr="{ maxlength: 10 }"
      v-model="form.name"
    ></mt-field>

    <!-- 性别选择 -->
    <RadioTag
      label="性别"
      field="sex"
      :form="form"
      :selectedValue="form.sex"
      :options="['先生', '女士']"
    />

    <!-- 电话 -->
    <mt-field
      label="手机号"
      placeholder="请输入手机号"
      :attr="{ maxlength: 11 }"
      v-model="form.phone"
    ></mt-field>

    <!-- 地址 -->
    <mt-field
      label="地址"
      placeholder="请输入小区/学校/写字楼"
      type="textarea"
      v-model="form.address"
      :attr="{ maxlength: 50 }"
    >
      <i
        class="fa fa-angle-right"
        @click="$bus.$emit('handlePositionPopup', true)"
      ></i>
    </mt-field>

    <!-- 门牌号 -->
    <mt-field
      label="门牌号"
      placeholder="10栋3单元3楼301号"
      type="textarea"
      v-model="form.houseNumber"
      :attr="{ maxlength: 50 }"
    >
      <i class="fa fa-edit"></i>
    </mt-field>

    <!-- 标签 -->
    <RadioTag
      label="标签"
      field="tag"
      :form="form"
      :selectedValue="form.tag"
      :options="['家', '学校', '公司']"
    />
  </form>
</template>

<script>
import RadioTag from '../radioTag';

export default {
  name: 'AddressForm',
  props: {
    form: Object
  },

  components: { RadioTag }
};
</script>

<style lang="stylus" scoped>
.form {
  background-color: #fff;
  padding: 0 1rem;

  >>> .mint-cell-text {
    color: #000;
  }

  .fa {
    font-size: 2rem;
    padding: 0.5rem 1rem;
  }
}
</style>