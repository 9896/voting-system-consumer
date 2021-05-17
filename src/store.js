import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
/**
* This two(user faculty and department) will be vital in ensuring participation requests are sent where valid
*/
const state = {
    access_token: false,
    userState: undefined,
    user:undefined
}
//Mutations contain the methods that would change state data, Place in capital for syntax highlighting and shit
//Note that the first argument must state object and an optional payload
const mutations = {
    ADD_ACCESS_TOKEN(state,token){
        state.access_token = token;
    },
    ADD_USER_STATE(state, userState){
        state.userState = userState;
    },
    ADD_USER(state, user){
        state.user = user;
    }
};

//Note actions has access the context object which through it we have access to the state object, getters and commit fxn
const actions = {
    addAccessToken(context, token){
        context.commit("ADD_ACCESS_TOKEN", token);
    },
    addUserState(context, userState){
        context.commit("ADD_USER_STATE", userState);
    },
    addUser(context, user){
        context.commit("ADD_USER", user);
    }
}

const getters = {
    getAccessToken(state){
        return state.access_token;
    },
    getUserState(state){
        return state.userState;
    },
    getUser(state){
        return state.user;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: [createPersistedState()],
});