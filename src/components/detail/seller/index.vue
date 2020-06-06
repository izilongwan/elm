<template>
  <section class="section" v-if="sellerDatas">
    <div class="img-wrap">
      <img
        :src="sellerDatas.header_image"
        :alt="sellerDatas.header_image"
      />
    </div>

    <div class="info">
      <h3 class="title">{{sellerDatas.title}}</h3>

      <p
        class="desc"
        :class="{more: isDescMore}"
      >{{sellerDatas.brand_intros[0].brief}}</p>

      <div class="view-all">
        <button class="btn" @click="handleMore">{{btnTxt}}</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DetailSeller',
  props: {
    sellerDatas: Object
  },

  data () {
    return {
      isDescMore: false,
      btnTxt: '查看品牌故事'
    }
  },

  deactivated () {
    this.isDescMore = false;
    this.btnTxt = '查看品牌故事';
  },

  methods: {
    handleMore () {
      if (this.isDescMore) {
        this.isDescMore = false;
        this.btnTxt = '查看品牌故事';
        return;
      }
      this.isDescMore = true;
      this.btnTxt = '收起';
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.section {
  padding: 2rem 2rem 1rem;
  background-color: #fff;

  .info {
    margin: 1rem 0 0;

    .title {
      font-size: 1.6rem;
      font-weight: bold;
    }

    .desc {
      ellipsis-m(2);
      margin: 1rem 0 2rem;
      line-height: 1.6rem;

      &.more {
        overflow: visible;
        display: block;
      }
    }

    .view-all {
      text-align: center;

      .btn {
        color: #666;
        padding: 0.5rem 1rem;
      }
    }
  }
}
</style>
