<template>
  <div class="">
    <site-header></site-header>
    
    <div class="container mx-auto px-4">
        <div class="page-info text-2xl flex justify-between items-center border-b-2 pt-4 pb-3 px-3 border-gray-400">
            <h3 class="">Available Stocks</h3>
            <div class="userbalance">
                <h5 class="">
                    Funds: ${{userBalance}}
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

                <button class="bg-teal-600 text-white font-semibold leading-8 tracking-wider py-1 w-full rounded-lg rounded-t-none hover:bg-teal-800">
                  BUY NOW
                </button>
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
      stockList: [
        {
          id: 1,
          stock_name: "American Broadcasting Company",
          stock_image: "stock_logo/abc.png",
          stock_price: "87.41",
          stock_quantity: 1,
          logowide: false
        },
        {
          id: 2,
          stock_name: "Absolut Vodka ltd",
          stock_image: "stock_logo/absolut.png",
          stock_price: "83.36",
          stock_quantity: 1,
          logowide: true
        },
        {
          id: 3,
          stock_name: "Accenture",
          stock_image: "stock_logo/accenture.png",
          stock_price: "83.66",
          stock_quantity: 1,
          logowide: true
        },
        {
          id: 4,
          stock_name: "Airbnb Inc.",
          stock_image: "stock_logo/airbnb.png",
          stock_price: "76.71",
          stock_quantity: 1,
          logowide: true
        },
        {
          id: 5,
          stock_name: "Amazon.com",
          stock_image: "stock_logo/amazon.png",
          stock_price: "32.69",
          stock_quantity: 1,
          logowide: true
        },
        {
          id: 6,
          stock_name: "Apple",
          stock_image: "stock_logo/apple.png",
          stock_price: "65.81",
          stock_quantity: 1,
          logowide: false
        },
        {
          id: 7,
          stock_name: "BMW",
          stock_image: "stock_logo/bmw.png",
          stock_price: "10.34",
          stock_quantity: 1,
          logowide: false
        },
        {
          id: 8,
          stock_name: "Cartoon Network",
          stock_image: "stock_logo/cartoonnetwork.png",
          stock_price: "55.69",
          stock_quantity: 1,
          logowide: false
        },
        {
          id: 9,
          stock_name: "Dolce & Gabana",
          stock_image: "stock_logo/dolcegabana.png",
          stock_price: "24.74",
          stock_quantity: 1,
          logowide: false
        },
        {
          id: 10,
          stock_name: "Dropbox",
          stock_image: "stock_logo/dropbox.png",
          stock_price: "46.01",
          stock_quantity: 1,
          logowide: true
        },
        {
          id: 11,
          stock_name: "Google (Alphabet Inc.)",
          stock_image: "stock_logo/google.png",
          stock_price: "96.37",
          stock_quantity: 1,
          logowide: false
        },
        {
          id: 12,
          stock_name: "Hasbro Toys Ltd.",
          stock_image: "stock_logo/hasbro.png",
          stock_price: "19.72",
          stock_quantity: 1,
          logowide: false
        },
        {
          id: 13,
          stock_name: "Hubspot",
          stock_image: "stock_logo/hubspot.png",
          stock_price: "55.92",
          stock_quantity: 1,
          logowide: true
        },
        {
          id: 14,
          stock_name: "Kentucky Fried Chicken",
          stock_image: "stock_logo/kfc.png",
          stock_price: "35.41",
          stock_quantity: 1,
          logowide: false
        },
        {
          id: 15,
          stock_name: "Lyft ride sharing",
          stock_image: "stock_logo/lyft.png",
          stock_price: "30.83",
          stock_quantity: 1,
          logowide: true
        },
        {
          id: 16,
          stock_name: "Morrisons Investment Firm",
          stock_image: "stock_logo/morrisons.png",
          stock_price: "52.46",
          stock_quantity: 1,
          logowide: true
        },
        {
          id: 17,
          stock_name: "MOZ LLC",
          stock_image: "stock_logo/moz.png",
          stock_price: "56.83",
          stock_quantity: 1,
          logowide: true
        },
        {
          id: 18,
          stock_name: "Netflix Inc.",
          stock_image: "stock_logo/netflix.png",
          stock_price: "17.97",
          stock_quantity: 1,
          logowide: true
        },
        {
          id: 19,
          stock_name: "OMEGA watches",
          stock_image: "stock_logo/omega.png",
          stock_price: "38.20",
          stock_quantity: 1,
          logowide: false
        },
        {
          id: 20,
          stock_name: "Paypal",
          stock_image: "stock_logo/paypal.png",
          stock_price: "1.53",
          stock_quantity: 1,
          logowide: true
        },
        {
          id: 21,
          stock_name: "Quora Inc.",
          stock_image: "stock_logo/quora.png",
          stock_price: "46.76",
          stock_quantity: 1,
          logowide: true
        },
        {
          id: 22,
          stock_name: "Reebok Sports Equipment",
          stock_image: "stock_logo/reebok.png",
          stock_price: "22.39",
          stock_quantity: 1,
          logowide: true
        },
        {
          id: 23,
          stock_name: "Samsung",
          stock_image: "stock_logo/samsung.png",
          stock_price: "79.58",
          stock_quantity: 1,
          logowide: true
        },
        {
          id: 24,
          stock_name: "SpaceX",
          stock_image: "stock_logo/spacex.png",
          stock_price: "61.73",
          stock_quantity: 1,
          logowide: false
        },
        {
          id: 25,
          stock_name: "Spotify",
          stock_image: "stock_logo/spotify.png",
          stock_price: "81.79",
          stock_quantity: 1,
          logowide: false
        },
        {
          id: 26,
          stock_name: "Stripe Payments",
          stock_image: "stock_logo/stripe.png",
          stock_price: "81.18",
          stock_quantity: 1,
          logowide: true
        },
        {
          id: 27,
          stock_name: "Tesla Motors",
          stock_image: "stock_logo/tesla.png",
          stock_price: "44.41",
          stock_quantity: 1,
          logowide: false
        },
        {
          id: 28,
          stock_name: "Twitch Streaming",
          stock_image: "stock_logo/twitch.png",
          stock_price: "90.92",
          stock_quantity: 1,
          logowide: false
        },
        {
          id: 29,
          stock_name: "Verizon Mobile",
          stock_image: "stock_logo/verizon.png",
          stock_price: "4.26",
          stock_quantity: 1,
          logowide: true
        },
        {
          id: 30,
          stock_name: "Walt Disney Pictures",
          stock_image: "stock_logo/waltdisney.png",
          stock_price: "84.83",
          stock_quantity: 1,
          logowide: true
        },
      ],
      userBalance: 10000    
    };
  },
  components: {
    siteHeader
  },
  methods: {
    decrement_stock: function(listing){
      if(listing.stock_quantity > 1){
        listing.stock_quantity -= 1;
      }
      else{
        console.log('stock cannot be zero');
      }
    },
    increment_stock: function(listing){
      if(listing.stock_quantity < 10){
        listing.stock_quantity += 1;
      }
      else{
        console.log('stock cannot be more than 10');
      }
    },
    stock_total: function(listing){
      let total = listing.stock_quantity * listing.stock_price;
      // problem: need to round to 2 places after decimal
      // return (listing.stock_quantity * listing.stock_price)
      return Math.round((total + Number.EPSILON)*100) / 100;
    }
  }
};
</script>

<style lang="stylus" scoped></style>