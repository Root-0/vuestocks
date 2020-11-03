import stocks from '../../data/stocks_data.vue';

const state = {
    stocks: []
}

const mutations = {
    // mutation setstocks and pass stocks as payload
    'Set_stocks' (state, stocks) {
        state.stocks = stocks;
    },

    // randomise stocks
    'Random_stocks' (state){
        console.log("inside randomstocks: "+ state);
    }
};

const actions = {
    // use destructuring to pull commit function from context object
    buyStocks : ({commit}, order) =>{
        commit('buy_stock', order);
    },

    initStocks: ({commit}) => {
        // commit mutation
        commit('Set_stocks', stocks);
    },

    randomiseStocks:({commit}) => {
        commit('Random_stocks');
    }
}

// setup getters to get data
const getters = {
    stocks: state => {
        return state.stocks;
    }
}

export default {
    state, mutations, actions, getters
}