<template>
  <div id="app">
    <div class="intro">
      <img src="~assets/logo.png" width="50">
      <h1>Welcome to Vue.js</h1>
      <router-link to="/">Dashboard</router-link>
      <router-link to="/profile">Profile</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  padding-bottom: 40px;
}

a {
  margin: 10px;
  text-decoration: none;
  color: #2c3e50;

  &:hover {
    text-decoration: underline;
  }
}
</style>
