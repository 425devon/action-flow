<template>
  <div id="app">
    <img alt="grr logo" src="./assets/grr.png">
    <HelloWorld msg="Action Flow Testing v0.0.1-9"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #31502c;
  margin-top: 60px;
}
</style>
