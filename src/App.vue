<template>
  <div id="app" class="bg-gray-100">
    <site-header msg="Welcome to Your Vue.js App"/>
    <stock-list></stock-list>
  </div>
</template>

<script>
import siteHeader from './components/siteHeader.vue'
import stockList from './components/stockList.vue'


export default {
  name: 'App',
  components: {
    siteHeader,
    stockList
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
}
</style>
