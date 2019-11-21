<template>
    <div id="app">
        <b-navbar class="navigation" toggleable="lg" type="dark" variant="dark" fixed="top">
            <b-navbar-brand to="/" style="font-variant: small-caps;">Timothy Lin</b-navbar-brand>
    
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/resume">Resume</b-nav-item>
                    <b-nav-item to="/extras">Extras</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
    
            <b-navbar-nav class="ml-auto">
                <b-nav-text><em>Some cool things I've done, plus some random stuff.</em></b-nav-text>
            </b-navbar-nav>
        </b-navbar>
        
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {
        }
    }
</script>

<style>
    #app {
        font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .navigation {
        /*opacity: 95%;*/
    }
    h1 {
        font-weight: bold;
        font-variant: small-caps;
    }
</style>
