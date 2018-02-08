<template>
  <div id="app">
    <div class="pure-menu pure-menu-horizontal" style="margin: 15px;">
        <ul class="pure-menu-list">
            <li class="pure-menu-item"><router-link to="/" class="pure-menu-link" replace>Параметры</router-link></li>
            <li class="pure-menu-item"><router-link to="/result" class="pure-menu-link" replace>Результат</router-link></li>
            <li class="pure-menu-item"> <router-link to="/diagram" class="pure-menu-link" replace>Диаграмма</router-link></li>
        </ul>
    </div>
    <router-view/>
    <div class="modal" v-if="modalIsVisible">
        <div class="modal__content">
            <i class="big close icon" @click="closeModal"></i>
            <div class="modal-list" v-if="!!savesList.length">
                <div class="modal-list__item" v-for="(item) in savesList">
                    <div class="content">
                        <span>{{item.date}}</span>
                    </div>
                    <div class="right floated content">
                        <div class="ui button primary" @click="applySave(item);closeModal()">Применить</div>
                    </div>
                    
                </div>
            </div>
            <div class="modal__msg" v-else>
                <p>У вас нет доступных сохранений.</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'app',
    data() {
        return {
            currentRoute: '/',
        };
    },

    computed: {
        ...mapGetters(['modalIsVisible', 'savesList']),
    },
    methods: {
        ...mapActions(['setModalVisible', 'applySave']),

        closeModal() {
            this.setModalVisible(false);
        },
        setRoute(route) {
            this.currentRoute = route;
        },
    },
};
</script>

<style lang="stylus">
@import './styles/main.styl';
</style>
