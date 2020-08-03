<template>
    <div class="position">
        <div class="position-heading">
            <span class="position-title">{{title}}</span>
            <span class="position-dates">{{start}} - {{end}}</span>
        </div>
        <ul class="position-desc">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Position",
        props: {
            title: String,
            start: String,
            end: {
                type: String,
                default: "present"
            }
        }
    }
</script>

<style scoped>
    .position {
        text-align: left;
    }
    .position-heading {
        display: flex;
        justify-content: space-between;
    }
    .position-title {
        font-variant: small-caps;
        font-weight: bold;
        font-size: large;
    }
    .position-dates {
        font-style: italic;
        text-align: right;
    }
</style>