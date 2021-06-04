import * as menuServiceFetch from "@/services/fetchMenu"

export const state={

    menuTotal: 0,
    menus:[],
    menu:{}
}
export const mutations = {
    // commit and track state changes, mutations update state
    // mutations are synchronous (A > B > C > D > E)
    // common to use CAPS to spot mutations
    // called with commit('name')
    SET_MENUS(state, menus) {
        state.menus = menus
    },
    ADD_MENU(state, menu) {
        state.menus.push(menu)
    },
    SET_TOTAL(state, total) {
        state.menuTotal = total
    },
}
export const actions={
    // called from components, actions calling mutations to update state is best practice
    // actions are asynchronous (A > C > E > D > B)
    // called with dispatch('name')
    async getMenus({commit}){
        menuServiceFetch.getMenus().then(data=>{
            console.log(data+" "+data.menu);
            commit("SET_MENUS",  data.menu);//data["menu"]
            commit("SET_TOTAL",state.menus.length)
        }).catch(err=>console.log(err));

    },

    fetchMenu({ commit, rootState }, id) {
        // access getters
        var menu =rootState.menu.getMenuByID(id) // try to find this id (saves API call)
        if (menu) {
            // if found, set it
            commit('ADD_MENU', menu)
        } else {
          this.getMenus({commit});
        }
    },

}
export const getters={
    // access state
    menuLength: state=>{
        return state.menus.length
      },

     getMenuByID:state=>id=>{
        return state.menus.find(ele=>ele.id===id)
    },


}

