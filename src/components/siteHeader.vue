<template>
  <nav class="siteHeader bg-teal-900 text-teal-400 py-2 px-3 sm:px-4">
    <!-- test tailwindcss -->
    <div class="container mx-auto px-3 sm:flex sm:justify-between sm:items-center">
      <div class="flex justify-between items-center">
        <!-- site logo -->
        <div class="siteLogo">
          <router-link to="/" class="hover:text-white focus:outline-none">
            <span class="fab fa-modx text-xl"></span>
            <span class="font-semibold ml-1 text-2xl">Stonks</span>
          </router-link>
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
        <router-link v-for="link in menulinks" :key="link.linkname" :to="link.linkname">
          <a class="block sm:inline hover:bg-teal-700 p-2 rounded sm:ml-8 mt-1 sm:mt-0">
            <span class="text-xs sm:text-sm" :class=link.icon></span>
            <span class="sm:font-semibold ml-1 text-md sm:text-lg">{{link.linkname}}</span>
          </a>
        </router-link>

        <!-- other functional buttons on menu -->
        <!-- <a class="block sm:inline hover:bg-teal-700 p-2 rounded sm:ml-8 mt-1 sm:mt-0" 
           v-for="singlebutton in buttons" :key="singlebutton.linkname"
           v-on="singlebutton.linkname == 'End Day' ? { click: () => endDay() } : {click: () => '' } ;
                singlebutton.linkname == 'Save' ? { click: () => saveData() } : {click: () => '' }">
          <span class="text-xs sm:text-sm" :class=singlebutton.icon></span>
          <span class="sm:font-semibold ml-1 text-md sm:text-lg">{{singlebutton.linkname}}</span>
        </a> -->

        <a class="block sm:inline hover:bg-teal-700 p-2 rounded sm:ml-8 mt-1 sm:mt-0" @click="endDay">
          <span class="text-xs sm:text-sm fa fa-clock"></span>
          <span class="sm:font-semibold ml-1 text-md sm:text-lg">End Day</span>
        </a>

        <a class="block sm:inline hover:bg-teal-700 p-2 rounded sm:ml-8 mt-1 sm:mt-0" @click="saveData">
          <span class="text-xs sm:text-sm fa fa-save"></span>
          <span class="sm:font-semibold ml-1 text-md sm:text-lg">Save Data</span>
        </a>

        <a class="block sm:inline hover:bg-teal-700 p-2 rounded sm:ml-8 mt-1 sm:mt-0" @click="loadData">
          <span class="text-xs sm:text-sm fa fa-history"></span>
          <span class="sm:font-semibold ml-1 text-md sm:text-lg">Load Data</span>
        </a>
        
      </div>

    </div>

  </nav>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'Stonks',
  data: function(){
    return{
      menuOpen: false,
      menulinks: [
        {
          icon: 'fa fa-grip-vertical',
          linkname: 'Portfolio'
        }
      ],
    }
  },
  props: {
    msg: String
  },
  methods:{
    ...mapActions({
      randomiseStocks: 'randomiseStocks',
      fetchData: 'loadData'
    }),
    endDay: function(){
      console.log("call endday");
      this.randomiseStocks();
    },
    saveData: function(){
      console.log("saving data....");
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }
      this.$http.put("data.json", data);
    }, 
    loadData: function(){
      console.log("loading data...");
      this.fetchData();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .menu-links a:hover{
    color: white; 
  }
</style>
