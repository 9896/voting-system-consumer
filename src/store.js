import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    access_token: false
}
//Mutations contain the methods that would change state data, Place in capital for syntax highlighting and shit
//Note that the first argument must state object and an optional payload
const mutations = {
    ADD_ACCESS_TOKEN(state,token){
        state.access_token = token;
    }
};

//Note actions has access the context object which through it we have access to the state object, getters and commit fxn
const actions = {
    addAccessToken(context, token){
        context.commit("ADD_ACCESS_TOKEN", token);
    }
}

const getters = {
    getAccessToken(state){
        return state.access_token;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});