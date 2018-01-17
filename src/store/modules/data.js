/* eslint-disable no-shadow */
import Vue from 'vue';
import defaultParams from '@/lib/defaultParams';
import * as types from '../mutation-types';

const state = {
    values: defaultParams,
};

const getters = {
    params: state => {
        const propNames = Object.getOwnPropertyNames(state.values).slice(0, -1);
        const reslut = {};
        propNames.forEach(el => {
            reslut[el] = state.values[el].value;
        });
        return reslut;
    },
    paramNames: state => {
        const propNames = Object.getOwnPropertyNames(state.values).slice(0, -1);
        const reslut = {};
        propNames.forEach(el => {
            reslut[el] = state.values[el].name;
        });
        return reslut;
    },
    values: state =>
        // todo cleanup obj props
         state.values,
};

const actions = {
    setNewParams({ commit }, data) {
        commit(types.SET_PARAMS, data);
    },
};

const mutations = {
    [types.SET_PARAMS](state, newValues) {
        Vue.set(state, 'values', newValues);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
