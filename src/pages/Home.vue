<template>
  <div>
    <!-- 三级联动组件 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list='floor'/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from './ListContainer.vue'
import Recommend from './Recommend.vue'
import Rank from './Rank.vue'
import Like from './Like.vue'
import Floor from './Floor.vue'
import Brand from './Brand.vue'
import {mapState} from 'vuex'
export default {
    name:'Home',
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand,
    },
    mounted(){
      this.$store.dispatch('getFloorList');
      // this.$store.dispatch('getUserInfo')
    },
    computed:{
      ...mapState({
        floorList:state=>state.home.floorList
      })
    }
}
</script>

<style>

</style>