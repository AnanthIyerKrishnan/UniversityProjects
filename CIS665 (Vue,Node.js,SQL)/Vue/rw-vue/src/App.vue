<template>
  <div>
    <my-header/>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-7">
          <router-view/>
        </div>
      </div>
    </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    "my-header":Header
  },
  created() {
    this.$store.dispatch("getFilms"); //dispatch the getFilms() action
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
