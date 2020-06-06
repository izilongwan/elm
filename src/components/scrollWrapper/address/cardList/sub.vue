<template>
  <!-- 我的地址 -->
  <li class="item" @click="handleAddress(item, idx)">
    <!-- 已选择的地址 -->
    <span class="check-wrap">
      <i class="fa fa-check-circle" v-if="curIdx === idx"></i>
    </span>

    <!-- 地址信息 -->
    <div class="info">
      <div class="cell-one">
        <span class="name">{{ item.name }}</span>

        <span class="sex">{{ item.sex }}</span>

        <span class="phone">{{ item.phone }}</span>
      </div>

      <div class="cell-two">
        <div class="tag-wrap">
          <em class="tag" v-if="item.tag">{{ item.tag }}</em>
        </div>

        <p class="address">{{ item.address }}</p>

        <i
          class="fa fa-edit"
          @click.stop="
            $router.push({name: 'addressEdit', params: {options: { ...baseOptions, form: item }}})
          "
        ></i>
      </div>
    </div>
  </li>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'AddressCardListItem',
  props: {
    item: Object,
    idx: Number,
    curIdx: Number
  },

  data () {
    return {
      baseOptions: {
        field: 'edit',
        title: '编辑地址'
      }
    };
  },

  methods: {
    ...mapMutations(['SET_SHOPPING_ADDRESS']),

    handleAddress (address, idx) {
      if (this.curIdx !== idx) {
        this.SET_SHOPPING_ADDRESS(address);
        this.$emit('update:curIdx', idx);
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/variables.styl';

.item {
  flex-row();
  padding: 1.5rem 1.5rem 1.5rem 0;
  margin-bottom: 0.2rem;
  background-color: #fff;
  font-size: 1.6rem;

  & + .item {
    border-top: 1px solid #eee;
  }

  .check-wrap {
    vh-center();
    width: 4rem;

    .fa {
      font-size: 2rem;
      color: $defaultGreen;
    }
  }

  .info {
    flex: 1;
    overflow: hidden;
  }

  .cell-one {
    flex-row();
    line-height: 2rem;

    .name {
      ellipsis();
      width: 6rem;
      font-size: 1.6rem;
      font-weight: bold;
    }

    .sex {
      margin: 0 1rem;
      color: #999;
    }
  }

  .cell-two {
    flex-row();
    justify-content: space-between;
    align-items: center;
    margin: 0.3rem 0;

    .tag-wrap {
      width: 3.5rem;
      height: 1.7rem;

      .tag {
        width: 100%;
        display: inline-block;
        border: 1px solid;
        border-radius: 3px;
        color: #FF7043;
        font-size: 1.3rem;
        text-align: center;
        line-height: 1.7rem;
      }
    }

    .address {
      ellipsis-m(3);
      width: 75%;
      color: #666;
    }

    .fa {
      font-size: 2rem;
    }
  }
}
</style>
