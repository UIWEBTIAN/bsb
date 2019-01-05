import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: "你好好好"
    },
    mutations: {
        increment(state, value) {
            console.log(state);
            console.log(value);
        }
    }
})

export default store