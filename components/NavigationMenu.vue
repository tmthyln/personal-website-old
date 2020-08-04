<template>
  <b-navbar class="navigation" toggleable="lg" type="dark" variant="dark" fixed="top">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-navbar-brand to="/" id="brand-title">Timothy Lin</b-navbar-brand>

    <b-collapse id="nav-collapse" v-model="show" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/resume">Resume</b-nav-item>
        <b-nav-item to="/extras">Extras</b-nav-item>
        <b-nav-item to="/posts">Blog Posts</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-nav v-if="!show" class="ml-auto">
      <b-nav-text><em>Some cool things I've done, plus some random stuff.</em></b-nav-text>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "NavigationMenu",
  data: function () {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
.navigation {
  opacity: 95%;
}
#nav-collapse {
  alignment: left;
}
#brand-title {
  font-variant: small-caps;
  font-size: x-large;
}
</style>