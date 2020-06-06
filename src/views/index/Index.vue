<template>
  <div class="container">
    <!-- Index 主视图 -->
    <keep-alive>
      <router-view />
    </keep-alive>

    <!-- Index 底部导航 Tab -->
    <IndexTab />
  </div>
</template>

<script>
import IndexTab from 'components/sub/tab';

export default {
  name: 'Index',
  components: { IndexTab },

  data () {
    return {
      tabValue: ''
    }
  },

  mounted () {
    this.tabValue = this.$route.name;
  },
}
</script>
