import Vue from 'vue'
import Vuex from 'vuex'
import jwt_decode from "jwt-decode"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        shoppingCart: [],
        jwtToken: null,
        jwtData: null
    },
    getters: {
        getShoppingCart(state) {
            return state.shoppingCart
        },
        isAuthorized(state){
            return state.jwtData != null
        },
        getEmail(state){
            if(!state.jwtData) return null
            return state.jwtData['sub']
        },
        getFirstname(state){
            if(!state.jwtData) return "Kasutaja"
            return state.jwtData['firstname']
        },
        hasRole: (state) => (role) => {
            return state.jwtData['scope'].includes(role)
        }
    },
    mutations: {
        loadCookies(state) {
            state.shoppingCart = JSON.parse(Vue.cookie.get("shopping_cart"))
            state.jwtToken = Vue.cookie.get("jwt")
            if (state.jwtToken) {
                state.jwtData = jwt_decode(state.jwtToken);
            }
            if (!state.shoppingCart) {
                state.shoppingCart = []
            }
        },
        setJwtToken(state, {jwt}) {
            state.jwtToken = jwt
            Vue.cookie.set("jwt", state.jwtToken)
            state.jwtData = jwt_decode(jwt);
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
        },
        logOut(state) {
            Vue.cookie.delete("jwt")
            state.jwtToken = null
            state.jwtData = null
        }
    }
})
