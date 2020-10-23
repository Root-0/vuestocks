<template>
  <div id="app">
    <site-header msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import siteHeader from './components/siteHeader.vue'

export default {
  name: 'App',
  components: {
    siteHeader
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
}
</style>
