<template>
    <div class="container mx-auto">
        <div class="page-info text-2xl flex justify-between items-center border-b-2 pt-4 pb-3 px-3 border-gray-400">
            <h3 class="">Available Stocks</h3>
            <div class="userbalance">
                <h5 class="">
                    Funds: ${{userBalance}}
                </h5>
            </div>
        </div>
        <div class="stocklist grid sm:grid-cols-3 gap-8 my-4">
            <div class="border rounded p-3 bg-gray-200 shadow" v-for="listing in stockList" :key="listing.id">
                {{listing.id}} <br>
                {{listing.stock_image}} <br>
                {{listing.stock_name}} <br>
                {{listing.stock_price}}

                <img :src="listing.stock_image" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      stockList: [
        {
          id: 1,
          stock_name: "American Broadcasting Company",
          stock_image: "//abc.png",
          stock_price: "$87.41",
        },
        {
          id: 2,
          stock_name: "Absolut Vodka ltd",
          stock_image: "//absolut.png",
          stock_price: "$83.36",
        },
        {
          id: 3,
          stock_name: "Accenture",
          stock_image: "//accenture.png",
          stock_price: "$83.66",
        },
        {
          id: 4,
          stock_name: "Airbnb Inc.",
          stock_image: "//airbnb.png",
          stock_price: "$76.71",
        },
        {
          id: 5,
          stock_name: "Amazon.com",
          stock_image: "//amazon.png",
          stock_price: "$32.69",
        },
        {
          id: 6,
          stock_name: "Apple",
          stock_image: "//apple.png",
          stock_price: "$65.81",
        },
        {
          id: 7,
          stock_name: "BMW",
          stock_image: "//bmw.png",
          stock_price: "$10.34",
        },
        {
          id: 8,
          stock_name: "Cartoon Network",
          stock_image: "//cartoonnetwork.png",
          stock_price: "$55.69",
        },
        {
          id: 9,
          stock_name: "Dolce & Gabana",
          stock_image: "//dolcegabana.png",
          stock_price: "$24.74",
        },
        {
          id: 10,
          stock_name: "Dropbox",
          stock_image: "//dropbox.png",
          stock_price: "$46.01",
        },
        {
          id: 11,
          stock_name: "Google (Alphabet Inc.)",
          stock_image: "//google.png",
          stock_price: "$96.37",
        },
        {
          id: 12,
          stock_name: "Hasbro Toys Ltd.",
          stock_image: "//hasbro.png",
          stock_price: "$19.72",
        },
        {
          id: 13,
          stock_name: "Hubspot",
          stock_image: "//hubspot.png",
          stock_price: "$55.92",
        },
        {
          id: 14,
          stock_name: "Kentucky Fried Chicken",
          stock_image: "//kfc.png",
          stock_price: "$35.41",
        },
        {
          id: 15,
          stock_name: "Lyft ride sharing",
          stock_image: "//lyft.png",
          stock_price: "$30.83",
        },
        {
          id: 16,
          stock_name: "Morrisons Investment Firm",
          stock_image: "//morrisons.png",
          stock_price: "$52.46",
        },
        {
          id: 17,
          stock_name: "MOZ LLC",
          stock_image: "//moz.png",
          stock_price: "$56.83",
        },
        {
          id: 18,
          stock_name: "Netflix Inc.",
          stock_image: "//netflix.png",
          stock_price: "$17.97",
        },
        {
          id: 19,
          stock_name: "OMEGA watches",
          stock_image: "//omega.png",
          stock_price: "$38.20",
        },
        {
          id: 20,
          stock_name: "Paypal",
          stock_image: "//paypal.png",
          stock_price: "$1.53",
        },
        {
          id: 21,
          stock_name: "Quora Inc.",
          stock_image: "//quora.png",
          stock_price: "$46.76",
        },
        {
          id: 22,
          stock_name: "Reebok Sports Equipment",
          stock_image: "//reebok.png",
          stock_price: "$22.39",
        },
        {
          id: 23,
          stock_name: "Samsung",
          stock_image: "//samsung.png",
          stock_price: "$79.58",
        },
        {
          id: 24,
          stock_name: "SpaceX",
          stock_image: "//spacex.png",
          stock_price: "$61.73",
        },
        {
          id: 25,
          stock_name: "Spotify",
          stock_image: "//spotify.png",
          stock_price: "$81.79",
        },
        {
          id: 26,
          stock_name: "Stripe Payments",
          stock_image: "//stripe.png",
          stock_price: "$81.18",
        },
        {
          id: 27,
          stock_name: "Tesla Motors",
          stock_image: "//tesla.png",
          stock_price: "$44.41",
        },
        {
          id: 28,
          stock_name: "Twitch Streaming",
          stock_image: "//twitch.png",
          stock_price: "$90.92",
        },
        {
          id: 29,
          stock_name: "Verizon Mobile",
          stock_image: "//verizon.png",
          stock_price: "$4.26",
        },
        {
          id: 30,
          stock_name: "Walt Disney Pictures",
          stock_image: "//waltdisney.png",
          stock_price: "$84.83",
        },
      ],
      userBalance: 10000    
    };
  },
  created: {

  }
};
</script>

<style lang="stylus" scoped></style>