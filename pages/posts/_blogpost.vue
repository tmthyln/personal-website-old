<template>
  <div id="blogpost">
    <h1>{{ title }}</h1>
    <component :is="dynamicComponent"/>
  </div>
</template>

<script>
export default {
  async asyncData({params}) {
    const md = await import(`~/content/${params.blogpost}.md`);
    return {
      title: md.attributes.title,
      dynamicComponent: md.vue.component
    }
  },
}
</script>

<style scoped>
#blogpost {
  margin: 1em 2em;
}
h1 {
  font-family: "Courier New", monospace;
}
</style>