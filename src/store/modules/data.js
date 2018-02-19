/* eslint-disable no-shadow */
import Vue from 'vue';
import defaultParams from '../../lib/defaultParams';
import { chartAvgTempSmoke, chartAvgTempAir, calcChartData } from '../../lib/chartData';
import { getSavesList, addNewSave } from '../../lib/savesLib';
import * as types from '../mutation-types';

const state = {
    values: defaultParams,
    modalIsVisible: false,
    saves: [],
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
    savesList: () => state.saves,
};

const actions = {
    setNewParams({ commit }, data) {
        commit(types.SET_PARAMS, data);
    },

    setModalVisible({ commit }, data) {
        commit(types.SET_MODAL_VISIBILITY, data);
    },

    getSavesList({ commit }) {
        const saves = getSavesList();
        commit(types.SET_SAVES, saves);
    },

    addNewSave({ commit }, data) {
        addNewSave(data);
    },

    applySave({ commit }, data) {
        commit(types.SET_PARAMS, data.data);
    },
};

const mutations = {
    [types.SET_PARAMS](state, newValues) {
        Vue.set(state, 'values', newValues);
    },

    [types.SET_MODAL_VISIBILITY](state, newVal) {
        Vue.set(state, 'modalIsVisible', newVal);
    },

    [types.SET_SAVES](state, saves) {
        Vue.set(state, 'saves', saves);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
