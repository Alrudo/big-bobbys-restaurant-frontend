import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        shoppingCart: []
    },
    getters: {
        getShoppingCart(state) {
            return state.shoppingCart
        }
    },
    mutations: {
        loadCookies(state) {
            state.shoppingCart = JSON.parse(Vue.cookie.get("shopping_cart"))
            if (!state.shoppingCart) {
                state.shoppingCart = []
            }
        },
        addShoppingItem(state, {item}) {
            state.shoppingCart.push(item)
            Vue.cookie.set("shopping_cart", JSON.stringify(state.shoppingCart))
        },
        changeShoppingItemQuantity(state, {id, amount}) {
            state.shoppingCart[id]['amount'] = amount
            Vue.cookie.set('shopping_cart', JSON.stringify(state.shoppingCart))
        },
        removeShoppingItem(state, {id}) {
            Vue.delete(state.shoppingCart, id)
            Vue.cookie.set("shopping_cart", JSON.stringify(state.shoppingCart))
        }
    }
})
