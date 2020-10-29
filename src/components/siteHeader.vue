<template>
  <nav class="siteHeader bg-teal-900 text-teal-400 py-2 px-3 sm:px-4">
    <!-- test tailwindcss -->
    <div class="container mx-auto sm:flex sm:justify-between sm:items-center">
      <div class="flex justify-between items-center">
        <!-- site logo -->
        <div class="siteLogo">
          <a href="#" class="hover:text-white focus:outline-none">
            <span class="fab fa-modx text-xl"></span>
            <span class="font-semibold ml-1 text-2xl">Stonks</span>
          </a>
        </div>

        <!-- mobile menu toggle -->
        <div class="sm:hidden">
          <button class="block fa fa-bars text-xl hover:text-white focus:outline-none" v-if="menuOpen == false" @click="menuOpen = !menuOpen"></button>
          <button class="block fa fa-times text-2xl hover:text-white focus:outline-none" v-if="menuOpen == true" @click="menuOpen = !menuOpen"></button>
        </div>
      </div>

      <!-- menu links -->
      <div :class="menuOpen ? 'block' : 'hidden'" class="menu-links sm:block my-2 sm:my-0">
        <!-- loop through menu links -->
        <a href="#" class=" block sm:inline hover:bg-teal-700 p-2 rounded sm:ml-8 mt-1 sm:mt-0" v-for="link in menulinks" :key="link.linkname">
          <span class="text-xs sm:text-sm" :class=link.icon></span>
          <span class="sm:font-semibold ml-1 text-md sm:text-lg">{{link.linkname}}</span>
        </a>
      </div>

    </div>

  </nav>
</template>

<script>

export default {
  name: 'Stonks',
  data: function(){
    return{
      menuOpen: true,
      menulinks: [
        {
          icon: 'fa fa-grip-vertical',
          linkname: 'Portfolio'
        },
        {
          icon: 'fa fa-clock',
          linkname: 'End Day'
        },
        {
          icon: 'fa fa-save',
          linkname: 'Save'
        },
        {
          icon: 'fa fa-history',
          linkname: 'Load'
        }
      ]
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .menu-links a:hover{
    color: white; 
  }
</style>
