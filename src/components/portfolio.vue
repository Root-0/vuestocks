<template>
    <div class="">
        <site-header></site-header>

        <div class="container mx-auto px-4">
            <div class="page-info text-2xl flex justify-between items-center border-b-2 pt-4 pb-3  border-gray-400">
                <h3 class="">Portfolio</h3>
                <div class="userbalance">
                    <h5 class="">
                        <!-- Funds: ${{state.funds}} -->
                    </h5>
                </div>
            </div>
            <div class="stocklist grid sm:grid-cols-4 gap-16 my-4">
                <div class="rounded-lg bg-gray-100 shadow" v-for="listing in stocks" :key="listing.id">
                    <div class="p-3 flex items-center justify-center relative h-40">
                        <img :src="publicPath + listing.stockimage" alt="Business Logo" :class="listing.logowide ? 'w-32' : 'h-24'" class="">
                    </div>
                    <div class=" p-3 text-gray-900">
                        <span class="stock_status text-sm rounded px-2 bg-teal-200 text-teal-900">
                            <span class="fa fa-chevron-up text-xs"></span> 16%
                        </span>
                        <span class="text-gray-600 mx-1">&bull;</span>
                        <span class="text-sm text-gray-700">{{listing.stockqty}} stocks </span>
                        <h4 class="text-xl font-semibold tracking-wide leading-7 mt-1 truncate">{{listing.stockname}}</h4>
                        
                        <!-- price & quantity -->
                        <div class="flex justify-between items-baseline my-3">
                            <div class="text-2xl text-gray-700 font-semibold tracking-wider">
                                <span class="text-gray-600 font-normal mr-1">$</span>{{stock_total(listing)}}
                            </div>
                            <div class="stock-quantity">
                                <div class="stockqty flex justify-evenly items-center">
                                    <a href="javascript:void(0);" class="fa fa-minus-circle" :class="sellingStockQty == 0 ?'text-gray-400 cursor-default' :'text-teal-500 hover:text-teal-900'" @click="decrement_stock(sellingStockQty)"></a>
                                    <input title="Stock Quantity" readonly name="stocksell_quantity" v-model="sellingStockQty" :id="'stocksell_'+listing.id+'_quantity'" class="text-lg text-center font-semibold p-1 mx-2 w-8 bg-gray-100 border-b-2 leading-5 cursor-default focus:outline-none">
                                    <a href="javascript:void(0);" class="fa fa-plus-circle" :class="sellingStockQty == availableStockQty ?'text-gray-400 cursor-default' :'text-teal-500 hover:text-teal-900'" @click="increment_stock(sellingStockQty)"></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button @click="sell_Stock(listing)" class="bg-teal-600 text-white font-semibold leading-8 tracking-wider py-1 w-full rounded-lg rounded-t-none hover:bg-teal-800">
                        SELL STOCKS
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import siteHeader from './siteHeader.vue';
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    data() {
        return {
            // path for static assets
            publicPath: process.env.BASE_URL,
            availableStockQty: 0,
            sellingStockQty: 0
        };
    },
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        }),
        insufficientQty(){
            console.log("~~~ computed: insufficient qty");
            return this.sellingStockQty > this.availableStockQty;
        }
    },
    components: {
        siteHeader
    },
    methods: {
        ...mapActions([
            'sellStock'
        ]),
        sell_Stock(listing){
            // console.log(listing);
            const order = {
                stockId: listing.id,
                stockPrice: listing.stockprice,
                stockqty: listing.stockqty
            }
            this.availableStockQty = listing.stock_quantity;
            console.log(order);
            // call action
            this.sellStock(order);
        },
        decrement_stock: function(sellingStockQty){
            if(sellingStockQty > 1){
                this.sellingStockQty -= 1;
            }
            else{
                console.log('stock cannot be zero');
            }
        },
        increment_stock: function(sellingStockQty){
            if(sellingStockQty <= this.availableStockQty){
                this.sellingStockQty += 1;
            }
            else{
                console.log('stock cannot be more than 10');
            }
        },
        stock_total: function(listing){
            let total = listing.stockqty * listing.stockprice;
            // problem: need to round to 2 places after decimal
            // return (listing.stockqty * listing.stock_price)
            return Math.round((total + Number.EPSILON)*100) / 100;
        }
    }
}
</script>
