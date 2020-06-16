<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city:'',
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
     ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
    
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      console.log(res)
      if (res.ret && res.data) {
        const data = res.data
        console.log(res.data.city)
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  /**
   * 1.axios 请求数据放在mounted里面
   * 2.页面一旦挂载完成就发送axios请求
   * 3.父子组件传值，通过属性的形式传过去的，子组件通过props接受父组件
   * 4.通过v-bind传值，v-bind的简写形式：冒号
   * 5.子组件通过$emit的形式来传值给父组件,
   *    5.1 在子组件里写监听方法
   *    5.2 通过子组件触发的方法里面用$emit来父组件的监听，可以传参数 如$emit('delete',this.index) 
   *    5.3 如通过$emit来监听的话，那么父组件肯定由@delete关键并触发父组件的方法
   *    5.4 然后在父组件的methods里面写监听的方法就可以达到父子传值了
   * 6.router-link 路由跳转
   * 7.非父子之间的的传值，1.总线bus订阅模式 2.v-rux传值 Vue.prototype.bus= new Vue()
   *   7.1每个组件都由bus属性，因为每个组件都是同过vue来创建的
   *   7.2在子组件要定义一个handleClick方法
   *   7.3在子组件的methods方法里实现handleClick方法通过this.bus监听$emit,
   *      如this.bus.$emit('change',this.content),bus是存在于每个实例的，
   *      bus要都带有$emit属性
   *   7.4 每个生命周期都有个钩子函数 mounted{} 去监听bus的改变,this.bus.$on('change',function(){
   * })
   * 8.$ref来获取dom节点，进行一些dom的操作
   */
  mounted () {
    // this.lastCity = this.city
     this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
