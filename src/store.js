import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        music:{},
    },
    mutations: {
        increment (state) {
            state.count++
        },
        setMusic(state,data){
            state.music = data
        }
    },
    getters:{
        mymusic:state => {
            return state.music
        }
    }
})

export default store