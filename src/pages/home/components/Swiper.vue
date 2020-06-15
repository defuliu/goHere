
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>


<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay:3000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}

  /**
   * 1.swiper里面容易出现的bug，第一次组件是由空组件创建，如果请求填充数据的会是最后一条，如何解决呢，
   * 那么就是添加v-if 在计算属性里面判断数组长度，就是由完整的数据创建，在计算属性
   * 2.在模版里面尽量不要出现逻辑的代码
   */
</script>



<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
