/* eslint-disable no-shadow */
import Vue from 'vue';
import defaultParams from '@/lib/defaultParams';
import * as types from '../mutation-types';

const state = {
    values: defaultParams,
};

const getters = {
    params: state => {
        const result = {};
        state.values.forEach(el => {
            result[el.id] = el.value;
        });
        return result;
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
