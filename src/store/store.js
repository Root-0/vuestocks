import Vue from 'vue'
import Vuex from 'vuex'
import Stocks from './modules/stocks'
import Portfolio from './modules/portfolio'

import * as actions from './loadData'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {
        Stocks,
        Portfolio
    }
})