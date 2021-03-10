import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        counter: 0,
        extendedCounter: 0,
        extendedMode: false,
    },
    mutations:{
        INCREASE: (state) => {
            if(!state.extendedMode){
                state.counter++;
            } else {
                state.extendedCounter++;
            }
        },
        DECREASE: (state) => {
            if ((state.counter > 0 && state.counter != 0) || (state.extendedCounter > 0 && state.extendedCounter != 0)){
                if(!state.extendedMode){
                    state.counter--;
                } else {
                    state.extendedCounter--;
                }
            }
        },
        CHANGEMODE: (state) => {
            state.extendedMode = !state.extendedMode;
        }
    }
})