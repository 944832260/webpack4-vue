import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state = {
    num:1,
}

const mutations = {
    add(state,n){
        state.num += n
    },
    reduce(state){
        state.num--
    }
}

const getters = {
    num:function(state){
        return state.num +=100;
    }
}

const moduleA = {
    state,
    mutations,
    getters
}

export default new Vuex.Store({
    modules:{
        a:moduleA,
    }
})
