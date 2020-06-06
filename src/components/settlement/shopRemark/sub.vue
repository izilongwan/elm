<template>
  <!-- 订单备注项 -->
  <li class="item">
    <div class="one">{{item.title}}</div>
    <div class="two" @click="$bus.$emit(item.handleEvent, true)">
      <span class="txt">{{item.txt}}</span>
      <i class="fa fa-angle-right"></i>
    </div>
  </li>
</template>

<script>
export default {
  name: 'SettlementShopRemarkItem',
  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.item {
  flex-row();
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  & + .item {
    border-top: 1px solid #eee;
  }

  .one {
    color: #000;
    font-size: 1.6rem;
  }

  .two {
    max-width: 70%;
    ellipsis();
    color: #999;

    .fa {
      margin-left: 0.5rem;
      font-size: 1.8rem;
    }
  }
}
</style>