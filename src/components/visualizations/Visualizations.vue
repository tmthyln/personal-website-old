<template>
    <div>
        <div>
            <b-nav id="viz-nav" vertical class="w-25">
                <b-nav-item to="/visualizations/bezier">Bezier Curves</b-nav-item>
                <b-nav-item disabled>Coming Soon</b-nav-item>
            </b-nav>
        </div>
        
        <!--router-view></router-view-->
    </div>
</template>

<script>
    export default {
        name: "Visualizations"
    }
</script>

<style scoped>
#viz-nav {
    text-align: left;
}
</style>