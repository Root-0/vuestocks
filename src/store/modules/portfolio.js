const state = {
    funds: 1000,
    userStocks: []
}

const mutations = {
    'buy_stock'(state, {stockId, stockPrice, stockqty}){
        console.log("Order: "+" -- "+stockId+" -- "+stockPrice+" -- "+stockqty);
        
        // check if stock already bought
        const record = state.userStocks.find(element => element.id == stockId);
        
        // console.log("funds before: ", state.funds);
        
        // check to avoid negative calculation
        if(state.funds > stockPrice * stockqty){
            if(record){
                console.log("Inide mutation: buy_stock: record: "+ record.quantity);
                // if stock exists, update quantity
                record.quantity += stockqty;
            }
            else{
                state.userStocks.push({
                    id: stockId,
                    quantity: stockqty
                })
            }
        
            // state.funds -= stockPrice * stockqty;
            state.funds = Math.round(( (state.funds - (stockPrice * stockqty)) + Number.EPSILON)*100) / 100;
        }        
        // round up funds
        console.log("funds after: ", state.funds);
    },
    'sell_stock'(state, {stockId, stockPrice, stockqty}){
        // returns true if id's match
        const record = state.userStocks.find(element => element.id == stockId);
        if(record.quantity > stockqty){
            // if stock exists, update quantity
            record.quantity -= stockqty;
        }
        else{
            // selling all stocks
            state.userStocks.splice(state.userStocks.indexOf(record), 1);
        }

        // add cash from sale to funds
        // console.log("funds before sellin: "+ state.funds);

        state.funds = Math.round(( (state.funds + (stockPrice * stockqty)) + Number.EPSILON)*100) / 100;
        // state.funds += (stockPrice * stockqty);

        console.log("FUnds after selling: ", state.funds);
    },
    'set_portfolio' (state, portfolio){
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
    }
}

const actions = {
    sellStock({commit}, order){
        commit('sell_stock', order);
    }
}

const getters = {
    stockPortfolio(state, getters){
        return state.userStocks.map(stock => {
            // access getters.stocks from stocks.js
            const record = getters.stocks.stockList.find(element => element.id == stock.id);
            console.log("Getter Stockportfolio: "+record.stock_image + " for " + record.stock_name);
            // return all info of matched stock
            return {
                // stock.id & stock.qty from above
                id: stock.id,
                stockqty: stock.quantity,
                stockimage: record.stock_image,
                stockname: record.stock_name,
                stockprice: record.stock_price,
                logowide: record.logowide

                // stock.stockname & stock.stockprice from stockjs
                // stockname: record.stock_name,
                // stockprice: record.stock_price
            }
        })
    },
    funds(state){
        return state.funds;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}