
<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">您的位置</div>
        <div class="buttton-list">
          <div class="buttonwrapper">
            <div class="button">北京</div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">您热门城市</div>
          <div class="buttton-list">
            <div class="buttonwrapper">
              <div class="button">上海</div>
            </div>
          </div>
        </div>

        <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
          </div>
        </div>
         <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
              <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
            <div class="item border-bottom">南京</div>
            
          </div>
       </div>
       
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

/**
 * 1.路由跳转处理 router-link to 后面接需要跳转的的路径
 * 2.页面布局,要熟悉页面
 * 3.float 的时候 一定要注意 position 以及 overflow
 * 4.better-scroll
 * 5.$ref来获取dom节点，进行一些dom的操作
 */
export default {
  name: "CityList",
  //监听页面挂载
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .buttton-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .buttonwrapper {
      float: left;
      width: 33.33%;

      .button {
        text-align: center;
        margin: 0.1rem;
        padding: 0.1rem 0;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    font-size: 0.26rem;
    color: #333;

    .item {
      height: 0.5rem;
      padding-left: 0.2rem;
      line-height: 0.5rem;
    }
  }
}
</style>