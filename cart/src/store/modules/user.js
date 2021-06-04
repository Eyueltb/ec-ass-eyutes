export const state={
    users:{ id: '1', name: 'dawit',email:'dawit@kth.se' },
    user:[],
}
export const mutations = {
    SET_USERS(state, users) {
        state.users = users
    },
    ADD_USER(state, user) {
        state.user.push(user)
    },
    GET_USER(state){
        if(state.user!=null){
            state.user.forEach(u =>
                console.log(u.name)
            )
            return state.user;
        }
   },
    CHECK_USER(state, payload){
        let user=state.user.filter(u =>u.name.equals(payload.name))
                  .filter(u=>u.email.equals(payload.email));
      return  (user.length > 0)? true:false;
    }

}
export const actions={
    addUser({commit}, payload) {
        console.log("user: userOrder"+ payload)
       commit("ADD_USER", payload);
    },
    getUser({commit}){
        commit("GET_USER");
    },
    checkUser({commit}, payload){
      commit("CHECK_USER", payload);
    }
}
export const getters={
    getUsersByID:state=>id=>{
        return state.users.find(ele=>ele.id===id)
    },
}