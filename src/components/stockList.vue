<template>
  <div class="">
    <site-header></site-header>

    <div class="container mx-auto px-4">
        <div class="page-info flex justify-between items-center border-b-2 pt-4 pb-3  border-gray-400">
            <h3 class="text-md md:text-2xl font-semibold text-gray-600">Available Stocks</h3>
            <div class="userbalance">
                <h5 class="text-md md:text-2xl font-semibold text-gray-600">
                    Funds: ${{userFunds}}
                </h5>
            </div>
        </div>
        <div class="stocklist grid sm:grid-cols-4 gap-16 my-4">
            <div class="rounded-lg bg-gray-100 shadow" v-for="listing in stockList" :key="listing.id">
              <div class="p-3 flex items-center justify-center relative h-40">
                <img :src="publicPath + listing.stock_image" alt="Business Logo" :class="listing.logowide ? 'w-32' : 'h-24'" class="">
              </div>
              <div class=" p-3 text-gray-900">
                <span class="stock_status text-sm rounded px-2 bg-teal-200 text-teal-900">
                  <span class="fa fa-chevron-up text-xs"></span> 16%
                </span>
                <h4 class="text-xl font-semibold tracking-wide leading-7 mt-1 truncate">{{listing.stock_name}}</h4>
                
                <!-- price & quantity -->
                <div class="flex justify-between items-baseline my-3">
                  <div class="text-2xl text-gray-700 font-semibold tracking-wider">
                    <span class="text-gray-600 font-normal mr-1">$</span>{{stock_total(listing)}}
                  </div>
                  <div class="stock-quantity">
                    <!-- <select name="stock_quantity" id="stock_quantity" class="p-1 rounded text-md bg-white border border-gray-300">
                      <option value="1" v-for="(num, index) in 10" :key="index">{{num}} stock(s)</option>
                    </select> -->

                    <div class="stockqty flex justify-evenly items-center">
                      <a href="javascript:void(0);" class="fa fa-minus-circle" :class="listing.stock_quantity == 1 ?'text-gray-400 cursor-default' :'text-teal-500 hover:text-teal-900'" @click="decrement_stock(listing)"></a>
                      <input title="Stock Quantity" readonly name="stock_quantity" :id="'stock_'+listing.id+'_quantity'" v-model="listing.stock_quantity" class="text-lg text-center font-semibold p-1 mx-2 w-8 bg-gray-100 border-b-2 leading-5 cursor-default focus:outline-none">
                      <a href="javascript:void(0);" class="fa fa-plus-circle" :class="listing.stock_quantity == 10 ?'text-gray-400 cursor-default' :'text-teal-500 hover:text-teal-900'" @click="increment_stock(listing)"></a>
                    </div>
                  </div>
                </div>
              </div>

              <button @click="buystock(listing)" :disabled = "insufficientFunds" 
                      :class="insufficientFunds ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-teal-600 text-white hover:bg-teal-800 cursor-pointer'"
                      class=" font-semibold leading-8 tracking-wider py-1 w-full rounded-lg rounded-t-none">
                {{ insufficientFunds ? 'Insufficient Funds' : 'BUY NOW' }}
              </button>
              <!-- <button @click="buystock(listing)" :disabled = "insufficientFunds(listing)" 
                      :class="insufficientFunds(listing) ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-teal-600 text-white hover:bg-teal-800 cursor-pointer'"
                      class=" font-semibold leading-8 tracking-wider py-1 w-full rounded-lg rounded-t-none">
                BUY NOW
              </button> -->
            </div>
        </div>
    </div>
  </div>

</template>

<script>
import siteHeader from './siteHeader.vue';

export default {
  data() {
    return {
      // path for static assets
      publicPath: process.env.BASE_URL,
      buyingStockId: 0,
      buyingStockPrice: 0,
      buyingStockQty: 0  
    };
  },
  components: {
    siteHeader
  },
  computed: {
    // getter for stocklist
    stockList(){
      return this.$store.getters.stocks.stockList;
    },
    userFunds(){
      return this.$store.getters.funds;
    },
    insufficientFunds(){
      console.log("computed property ---- checking funds...");
      return this.buyingStockPrice * this.buyingStockQty > this.userFunds;
    }
  },
  methods: {
    decrement_stock: function(listing){
      if(listing.stock_quantity > 1){
        listing.stock_quantity -= 1;
      }
      else{
        console.log('stock cannot be zero');
      }
      // change quantity of this stock in computed property
      this.buyingStockQty = listing.stock_quantity;
      this.buyingStockPrice = listing.stock_price;
    },
    increment_stock: function(listing){
      if(listing.stock_quantity < 10){
        listing.stock_quantity += 1;
      }
      else{
        console.log('stock cannot be more than 10');
      }

      // change quantity of this stock in computed property
      this.buyingStockQty = listing.stock_quantity;
      this.buyingStockPrice = listing.stock_price;
    },
    // calculate total of stock
    stock_total: function(listing){
      let total = listing.stock_quantity * listing.stock_price;
      // problem: need to round to 2 places after decimal
      // return (listing.stock_quantity * listing.stock_price)
      return Math.round((total + Number.EPSILON)*100) / 100;
    },

    // call buy this stock
    buystock(listing){
      const order = {
        stockId : listing.id,
        stockPrice : listing.stock_price,
        stockqty : listing.stock_quantity
      }
      // console.log("\n \n Order: "+ order.stockId +" --> " + order.stockqty +" --> " + order.stockPrice);

      // find total price by calling function
      var stocktotal = this.stock_total(listing);
      console.log("total: ", stocktotal);

      // check if funds are sufficient
      var check =  this.insufficientFunds;
      console.log("check: ", check);
      if(this.insufficientFunds){
        console.log("Not enough balance");
      }else{
        // dispatch to portfolio.js actions
        this.$store.dispatch("buyStocks", order);
      }

      // listing.stock_quantity = 1;
      // console.log("Reset stockquantity to "+listing.stock_quantity);
    }
    
  }
};
</script>

<style lang="stylus" scoped></style>