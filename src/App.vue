<template>
  <div id="app">
    <div class="pure-menu pure-menu-horizontal">
        <ul class="pure-menu-list">
            <li class="pure-menu-item"><router-link to="/" class="pure-menu-link" replace>values</router-link></li>
            <li class="pure-menu-item"><router-link to="/result" class="pure-menu-link" replace>result</router-link></li>
            <li class="pure-menu-item"> <router-link to="/diagram" class="pure-menu-link" replace>diagram</router-link></li>
        </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'app',
};
</script>

<style lang="stylus">
  @import './styles/main.styl'
</style>
