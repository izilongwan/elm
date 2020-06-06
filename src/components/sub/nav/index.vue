<template>
  <!-- 导航面板 -->
  <div class="nav-bd" :class="{fixed: isFixed}">
    <!-- 导航列表 -->
    <ul class="list">
      <li
        class="item"
        :class="{current: idx == curIdx}"
        :key="idx"
        @click="clickNav(item, idx)"
        v-for="(item, idx) of recomDatas.navTab"
      >
        <em class="name">{{item.name}}</em>
        <i v-if="item.icon" :class="`fa fa-${item.icon}`"></i>
      </li>
    </ul>

    <!-- 遮罩层 -->
    <MaskNav
      :field="maskFiled"
      :sorts="recomDatas.sortBy"
      :filters="recomDatas.screenBy"
      @handleMaskField="handleMaskField"
    />
  </div>
</template>

<script>
import MaskNav from '../mask';

export default {
  name: 'FilterNav',

  components: { MaskNav },

  props: {
    recomDatas: Object
  },

  data () {
    return {
      maskFiled: '',
      curIdx: 0,
      isFixed: false
    }
  },

  mounted () {
    this.busOn();
  },

  methods: {
    busOn () {
      this.$bus.$on('handleMaskField', (field) => this.handleMaskField(field));
      this.$bus.$on('navFixed', (fixed) => this.isFixed = fixed);
    },

    handleMaskField (field) {
      this.maskFiled = field;

      if (!field) {
        this.$bus.$emit('falseSearchFixed', false);
        this.$bus.$emit('navFixed', false);
      }
    },

    clickNav (item, idx) {
      this.curIdx = idx;

      switch (idx) {
        case 0:
        case 3:
          const field = idx === 0 ? 'sort' : 'filter';

          this.isFixed = true;
          this.$bus.$emit('handleMaskField', field);
          this.$bus.$emit('falseSearchFixed', true);
          break;
        case 1:
        case 2:
          this.$bus.$emit('changeSortCode', item, idx);
          this.$bus.$emit('handleMaskField', '');
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.nav-bd {
  position: sticky;
  z-index: 1;
  top: 8.8rem;
  background-color: #fff;

  &.fixed {
    position: fixed;
    z-index: 2;
    top: 4.5rem;
    left: 0;
    width: 100%;
    background-color: #fff;
  }

  .list {
    flex-row();

    .item {
      vh-center();
      width: 25%;
      padding: 1.5rem 0.5rem;
      font-size: 1.6rem;

      .name {
        ellipsis();
      }

      .fa {
        padding-left: 0.5rem;
      }

      &.current {
        font-weight: bold;
      }
    }
  }
}
</style>
