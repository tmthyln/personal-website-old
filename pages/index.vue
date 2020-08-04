<template>
  <div id="homepage" class="navigable-page">
    <NavigationMenu />
    <h1>Under Construction</h1>
    <h2>Please check back later for changes.</h2>
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu";

export default {
  name: 'HomePage',
  components: {NavigationMenu}
}
</script>

<style>
#homepage {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-weight: bold;
  font-variant: small-caps;
}
</style>