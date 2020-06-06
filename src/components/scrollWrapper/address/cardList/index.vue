<template>
  <!-- 我的地址列表 -->
  <section class="section">
    <ul class="list">
      <AddressCardListItem
        v-for="(item, idx) of address"
        :key="idx"
        :item="item"
        :idx="idx"
        :curIdx.sync="curIdx"
      />
    </ul>
  </section>
</template>

<script>
import AddressCardListItem from "./sub";

export default {
  name: 'AddressList',
  props: {
    address: Array
  },

  data () {
    return {
      curIdx: -1
    }
  },

  components: { AddressCardListItem }
}
</script>