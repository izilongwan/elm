<template>
  <!-- 单选按钮 -->
  <div class="add-radio">
    <h3 class="label" v-if="label">{{label}}</h3>
    <ul class="list">
      <li
        class="item"
        :class="{active: selectedValue === item}"
        :key="idx"
        v-for="(item, idx) of options"
        @click="handleItem(item)"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AddressAddRadio',
  props: {
    form: Object,
    label: String,
    field: String,
    options: Array,
    selectedValue: String
  },

  methods: {
    handleItem (item) {
      if (this.selectedValue !== item) {
        this.form[this.field] = item;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.add-radio {
  flex-row();
  align-items: center;
  padding: 1.1rem 0;
  margin: 0 0.3rem 0 1rem;
  border-top: 1px solid #ddd;

  .label {
    width: 10rem;
    color: #999;
    font-size: 1.6rem;
  }

  .list {
    flex-row();

    .item {
      padding: 0.4rem 1.5rem;
      margin-right: 1rem;
      border-radius: 5px;
      border: 1px solid #ccc;

      &.active {
        background-color: rgba(209, 245, 246, 0.271);
        border-color: #bbf5e8;
        color: #bbf5e8;
      }
    }
  }
}
</style>