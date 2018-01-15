/* eslint-disable no-shadow */
import defaultParams from '@/lib/defaultParams';
import Vue from 'vue';
// import Api from '../../api/api'
import * as types from '../mutation-types';

// const api = new Api()

const state = {
    defaultValues: defaultParams,
};

const getters = {
    defaultValues: state => {
        const propNames = Object.getOwnPropertyNames(state.defaultValues).slice(0, -1);
        const reslut = {};
        propNames.forEach(el => {
            reslut[el] = state.defaultValues[el].value;
        });
        return reslut;
    },
};

const actions = {
    /*     async getDefaultParams({ commit }) {
        commit(types.GET_DEFAULT_PARAMS, await api.getParams())
    },

    async setDefaultParams({ commit }) {
        commit(types.SET_DEFAULT_PARAMS, await api.setParams())
    }, */
};

const mutations = {
    [types.SET_DEFAULT_PARAMS](state, newValues) {
        Vue.set(state, 'defaultValues', newValues);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
