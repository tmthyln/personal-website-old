<template>
    <div id="app">
        <b-navbar class="navigation" toggleable="lg" type="dark" variant="dark" fixed="top">
            <b-navbar-brand to="/" id="brand-title">Timothy Lin</b-navbar-brand>
    
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            
            <b-collapse id="nav-collapse" v-model="show" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/resume">Resume</b-nav-item>
                    <b-nav-item to="/extras">Extras</b-nav-item>
                    <b-nav-item to="/visualizations">Visualizations</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
    
            <b-navbar-nav v-if="!show" class="ml-auto">
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
        },
        data: function () {
            return {
                show: true
            }
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
    #nav-collapse {
        alignment: left;
    }
    #brand-title {
        font-variant: small-caps;
        font-size: x-large;
    }
    h1 {
        font-weight: bold;
        font-variant: small-caps;
    }
</style>
