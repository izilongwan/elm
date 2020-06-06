<template>
  <!-- 筛选面板 -->
  <div class="filter-bd">
    <!-- 列表 -->
    <ul class="list">
      <li class="item" v-for="(item, idx) of filters" :key="idx">
        <h2 class="title">{{item.title}}</h2>
        <ul class="c-list">
          <li
            class="c-item"
            :class="{active: cItem.select}"
            :key="cIdx"
            v-for="(cItem, cIdx) of item.data"
            @click="clickFilterItem(cItem, item.id, idx)"
          >
            <img v-if="cItem.icon" :src="cItem.icon" alt="/" />
            {{cItem.name}}
          </li>
        </ul>
      </li>
    </ul>

    <!-- 筛选按钮 -->
    <div class="btn-wrap" @click="clickBtn">
      <button class="btn cancel" :disabled="disabled">清 空</button>
      <button class="btn ok" :disabled="disabled">确 定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecomFilter',
  props: {
    filters: Array
  },

  computed: {
    disabled () {
      if (this.filters) {
        return !(this.filters.some(val => {
          return val.data.some(item => item.select);
        }))
      }
      return true;
    }
  },

  methods: {
    clickFilterItem (item, id, idx) {
      if (id !== 'MPI') {
        const data = this.filters[idx].data;

        data.forEach(val => val.select = false);
      }
      item.select = !item.select;
    },

    clickBtn (e) {
      const tar = e.target,
            type = tar.classList[1];

      switch (type) {
        case 'cancel':
          e.stopPropagation();
          this.restoreFilter();
          break;
        case 'ok':
          this.filterItems();
          break
        default:
          break;
      }
    },

    restoreFilter () {
      this.filters.forEach(val => {
        val.data.forEach(item => item.select = false);
      })
    },

    filterItems () {
      const temp = {};

      this.filters.forEach(val => {
        val.data.forEach(item => {
          if (item.select) {
            !temp[val.id] && (temp[val.id] = '');
            val.id === 'MPI'
              ? temp[val.id] += item.code + ','
              : temp[val.id] = item.code;
          }
        });
      })

      temp.MPI && (temp.MPI = temp.MPI.replace(/,$/, ''));
      this.$bus.$emit('handleMaskField', '');
      this.$bus.$emit('changeSortCode', temp, 3);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.filter-bd {
  background-color: #fff;

  .item {
    .title {
      padding: 0 1rem;
      line-height: 4rem;
    }

    .c-list {
      padding: 0 2rem;

      .c-item {
        display: inline-block;
        padding: 1rem 1.5rem;
        background-color: #eeeeee74;
        margin: 0 1rem 1rem 0;

        img {
          width: 1.4rem;
          vertical-align: bottom;
        }

        &.active {
          background-color: #7eafdf33;
          color: rgba(126, 175, 223, 0.96);
        }
      }
    }
  }

  .btn-wrap {
    border-top: 1px solid #ddd;

    .btn {
      width: 50%;
      height: 5rem;
      font-size: 1.6rem;

      &[disabled] {
        color: #999;
      }

      &.ok {
        color: #fff;
        background-color: $defaultGreen;

        &[disabled] {
          color: #999;
          background-color: #fff;
        }
      }
    }
  }
}
</style>