
<template>
   <ul class="list">
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>

   </ul>
</template>

<script>

/**
 * 1.路由跳转处理 router-link to 后面接需要跳转的的路径
 */
export default {
   name:"CityAlphabet"
}
</script>

<style lang="stylus" scoped>
@import  '~styles/varibles.styl';
.list 
   display flex
   flex-direction  column
   position absolute
   top:1.58rem
   right 0
   bottom 0
   width .4rem
   justify-content  center

   .item
      line-height .4rem
      text-align center
      color $bgColor

  



</style>