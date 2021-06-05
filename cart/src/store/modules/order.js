import * as menuServiceFetch from "@/services/fetchMenu";

export const state={
    cart:[],
    total:0,
    order:[],
}
export const mutations = {

    ADD_CART(state,  cartItem){
        if (state.cart.find((item) => item.id === cartItem.id)) {
            cartItem.quantity += 1;
        } else {
            state.total = state.total + cartItem.price;
            state.cart.push(cartItem);
            cartItem.quantity++;
        }
    },
    ADD_ORDER(state,  orderItem){
        if (orderItem!=null) {
            state.order.push(orderItem);
            state.cart=null;
        }
    },
    GET_CART(state){
        if(state.cart!=null){
             return state.cart
        }
    },
    GET_ORDER_USER(state){
        return state.order.filter(order1=>order1['user']);
        //if(state.order!=null){ }
    },
    GET_ORDER_ITEMS(state){
        return state.order.map(order1=>order1['item']);
        //if(state.order!=null){ }
    },
    ARROW_DOWN(state, payload){
        const deductOne = state.cart.find((item) => item.id === payload.id);
        if (deductOne.quantity >= 1) {
            deductOne.quantity--;
            state.total = state.total - payload.price;
        } else {
            deductOne.quantity = 0;
        }
    },
    ARROW_UP(state, payload){
        const addOne = state.cart.find((item) => item.id === payload.id);
        addOne.quantity++;
        state.total = state.total + payload.price;
   },
    DELETE_ORDER(state, payload){
        state.cart = state.cart.filter(item => item.id != payload.id);
        state.total = state.total - payload.price * payload.quantity;
    },
    GET_ORDER_HISTORY(state){
        if (state.order!=null)
            return state.order;
    }
}
export const actions={
    async registerOrder({commit}, payload){
        menuServiceFetch.postCart(payload).then(commit("ADD_CART",payload));
        state.cart.forEach(item=>console.log(item))
    },
    addToCart({ commit, rootState }, payload) {
        let addItem = rootState.menu.menus.find((item) => item.id === payload.id);
        let quantity = { quantity: "" };
        let cartItem = { ...addItem, ...quantity };
        commit("ADD_CART", cartItem);
   },
    addOrder({ commit}, payload) {
       commit("ADD_ORDER", payload);
    },
    getCartLength(state){
        return state.cart.length;
    },
    async getOrders({commit}){
        menuServiceFetch.getOrders().then(result=>{
            console.log(result+" "+result);
            commit("ADD_ORDER",  result);
        }).catch(err=>console.log(err));

    },
    getCart({ commit}){
       commit("GET_CART");
    },
    cartTotalRemove({ commit}) {
       commit("cartTotalRemove");
    },
    decreaseOrder({ commit}, payload) {
       commit("ARROW_DOWN", payload);
    },
    increaseOrder({ commit}, payload) {
       commit("ARROW_UP", payload);
    },
    deleteOrder({ commit}, payload) {
      commit("DELETE_ORDER",payload);
    },
    getOrderHistory({ commit}){
        commit("GET_ORDER_HISTORY");
    },
    getOrderUser({commit}){
        commit("GET_ORDER_USER");
    },
    getOrderItems({commit}){
        commit("GET_ORDER_ITEMS");
    }
}
export const getters={

}
