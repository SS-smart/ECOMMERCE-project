<template>
  <div>
    <Myhead></Myhead>
    <router-view></router-view>
    <Myfooter v-show="$route.meta.show"></Myfooter>
  </div>
</template>

<script>
import Myhead from './components/Myhead.vue'
import Myfooter from './components/Myfooter.vue'
export default {
  name: 'App',
  components: {
    Myhead,
    Myfooter
  },
  mounted(){
        this.$store.dispatch("categoryList");
  }
}
</script>

<style>


</style>
