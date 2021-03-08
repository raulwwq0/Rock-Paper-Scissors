import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        counter: 0,
        extendedMode: false,
    },
    mutations:{
        INCREASE: (state) => {
            state.counter++;
        },
        DECREASE: (state) => {
            if (state.counter > 0){
                state.counter--;
            }
        },
        CHANGEMODE: (state) => {
            state.extendedMode = !state.extendedMode;
        }
    }
})