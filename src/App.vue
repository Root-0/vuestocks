<template>
  <div id="app" class="bg-gray-200">
    <!-- <site-header msg="Welcome to Your Vue.js App"/>
    <stock-list></stock-list>
    <portfolio></portfolio> -->

    <router-view></router-view>
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
</style>
