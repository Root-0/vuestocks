<template>
  <div id="app" class="bg-gray-200">
    <!-- <site-header msg="Welcome to Your Vue.js App"/>
    <stock-list></stock-list>
    <portfolio></portfolio> -->

    <transition name="appear" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import siteHeader from './components/siteHeader.vue'
// import stockList from './components/stockList.vue'
// import portfolio from './components/portfolio.vue'


export default {
  name: 'App',
  created(){
    this.$store.dispatch('initStocks');
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
}
.appear-enter-active{
  animation: appear-in 400ms ease-out forwards;
}

.appear-leave-active{
  animation: appear-out 400ms ease-out forwards;
}

@keyframes appear-in {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
@keyframes appear-out {
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
}

</style>
