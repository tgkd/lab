/* eslint-disable no-shadow */
import Vue from 'vue';
import defaultParams from '@/lib/defaultParams';
import { chartAvgTempSmoke, chartAvgTempAir, calcChartData } from '@/lib/chartData';
import * as types from '../mutation-types';

const state = {
    values: defaultParams,
    modalIsVisible: false,
};

const getters = {
    params: state => {
        const result = {};
        state.values.forEach(el => {
            result[el.id] = el.value;
        });
        return result;
    },
    values: state => state.values,
    chartAvgTempAir: () => calcChartData(chartAvgTempAir),
    chartAvgTempSmoke: () => calcChartData(chartAvgTempSmoke),
    modalIsVisible: () => state.modalIsVisible,
};

const actions = {
    setNewParams({ commit }, data) {
        commit(types.SET_PARAMS, data);
    },

    setModalVisible({ commit }, data) {
        commit(types.SET_MODAL_VISIBILITY, data);
    },
};

const mutations = {
    [types.SET_PARAMS](state, newValues) {
        Vue.set(state, 'values', newValues);
    },

    [types.SET_MODAL_VISIBILITY](state, newVal) {
        Vue.set(state, 'modalIsVisible', newVal);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
