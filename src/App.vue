<template>
  <div id="app">
    <div class="pure-menu pure-menu-horizontal">
        <ul class="pure-menu-list">
            <li class="pure-menu-item"><router-link to="/" class="pure-menu-link" replace>Параметры</router-link></li>
            <li class="pure-menu-item"><router-link to="/result" class="pure-menu-link" replace>Результат</router-link></li>
            <li class="pure-menu-item"> <router-link to="/diagram" class="pure-menu-link" replace>Диаграмма</router-link></li>
        </ul>
    </div>
    <router-view/>
    <div class="modal" v-if="modalIsVisible" @click="closeModal">
      <div class="modal__content">test</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'app',
    computed: {
        ...mapGetters(['modalIsVisible']),
    },
    methods: {
        ...mapActions(['setModalVisible']),

        closeModal() {
            this.setModalVisible(false);
        },
    },
};
</script>

<style lang="stylus">
  @import './styles/main.styl'
</style>
