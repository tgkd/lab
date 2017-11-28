<template>
  <div id="app">
    <router-link to="/" replace>values</router-link>
    <router-link to="/result" replace>result</router-link>
    <router-link to="/diagram" replace>diagram</router-link>
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
