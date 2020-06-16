
<template>
   <div>
     <city-header></city-header>
     <city-search></city-search>
     <city-list></city-list>
     <city-alhabet></city-alhabet>
   </div>

</template>

<script>
import CityHeader from './components/HeadCity'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlhabet from './components/Alphabet'
export default {
   name:"City",
   components:{
      CityHeader,
      CitySearch,
      CityList,
      CityAlhabet
   }
}

</script>>

<style lang="stylus" scoped>

</style>