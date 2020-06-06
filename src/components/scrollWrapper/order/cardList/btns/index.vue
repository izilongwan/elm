<template>
  <!-- 删除订单/再来一单按钮 -->
  <div class="btn-wrap">
    <button
      class="btn remove"
      @click="handleOrder('remove')"
    >删除订单</button>

    <button class="btn add" @click="handleOrder('add')">再来一单</button>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import { LOCAL_TOKEN } from '@/config'

export default {
  name: 'OrderCardItemTBtns',
  props: {
    orderId: String,
    shoppingId: String
  },

  methods: {
    handleOrder (field) {
      switch (field) {
        case 'remove':
          MessageBox.confirm('确定删除该订单？')
            .then(action =>
              action && this.removeOrder()
            );
          break;
        case 'add':
          this.$router.push(`/detail/${ this.shoppingId }`);
          break
        default:
          break;
      }
    },

    removeOrder () {
      const data = {
        u_id: localStorage.getItem(LOCAL_TOKEN),
        order_id: this.orderId
      }

      this.$bus.$emit('removeOrder', data);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/variables.styl';

.btn-wrap {
  flex-row();
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding-left: 5rem;

  .btn {
    padding: 0.2rem 1rem;
    border: 1px solid;
    border-radius: 2px;

    &.add {
      border-color: $defaultBg;
      color: $defaultBg;
    }

    &.remove {
      border-color: $defaultOrange;
      color: $defaultOrange;
    }
  }
}
</style>
