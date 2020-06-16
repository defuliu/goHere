
<template>
   <div  class="search">
      <input class="search-input"  type="text" placeholder="输入城市或拼音" />
  
   </div>
</template>

<script>

/**
 * 1.路由跳转处理 router-link to 后面接需要跳转的的路径
 */
export default {
   name:"CitySearch"
}
</script>

<style lang="stylus" scoped>
   @import   '~styles/varibles.styl';
   .search
      height 0.72rem
      background  $bgColor
      padding 0.1rem
      .search-input
         box-sizing border-box
         padding-left 0.1rem
         height .62rem
         line-height 0.62rem
         text-align center
         width 100%
         border-radius 0.06rem


</style>