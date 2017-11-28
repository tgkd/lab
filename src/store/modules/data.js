/* eslint-disable no-shadow */
import Vue from 'vue'
import Api from '../../api/api'
import * as types from '../mutation-types'

const api = new Api()

const state = {
    defautValues: {},
}

const getters = {
    defautValues: (state) => state.defautValues,
}

const actions = {
    async getDefaultParams({ commit }) {
        commit(types.GET_DEFAULT_PARAMS, await api.getParams())
    },

    async setDefaultParams({ commit }) {
        commit(types.SET_DEFAULT_PARAMS, await api.setParams())
    },
}

const mutations = {
    [types.GET_DEFAULT_PARAMS](state, params) {
        Vue.set(state, 'all', params)
    },
    [types.SET_DEFAULT_PARAMS](state, params) {
        Vue.set(state, 'all', params)
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
