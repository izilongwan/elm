<template>
  <!-- 底部导航 Tab -->
  <mt-tabbar :fixed="true" v-model="value">
    <!-- TabItem -->
    <mt-tab-item
      v-for="item of list"
      :id="item.id"
      :key="item.icon"
    >
      <i
        slot="icon"
        style="font-size: 1.6rem"
        :class="`fa ${item.icon}`"
      ></i>
      {{ item.title }}
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
import { tabDatas } from 'data/tab';

export default {
  name: 'Tab',

  data () {
    return {
      list: tabDatas,
      value: ''
    }
  },

  activated () {
    this.value = this.$route.name;
  },

  watch: {
    value (val) {
      this.$router.push(`/${ val }`);
    }
  }
}
</script>
