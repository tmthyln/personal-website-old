<template>
  <b-card class="extra-item" bg-variant="dark" text-variant="white"
          :title="title" :sub-title="subtitle"
          :img-src="imgsrc" :img-alt="imgalt" img-bottom>
    <b-card-text v-html="desc">{{ desc }}</b-card-text>
    <slot></slot>
  </b-card>
</template>

<script>
export default {
  name: "ExtraItem",
  props: {
    title: String,
    subtitle: String,
    desc: String,
    imgsrc: String,
    imgalt: String
  }
}
</script>

<style scoped>
.extra-item {
  padding: 1rem 1.5rem;
}
</style>