<template>
  <div class="navigable-page">
    <NavigationMenu />
    <h1>All Posts</h1>
    <div>
      <table>
        <tr v-for="post in posts.slice().reverse()" :key="post.meta.resourcePath">
          <td>
            <nuxt-link :to="urlName(post.meta.resourcePath)"><h2>{{ post.attributes.title }}</h2></nuxt-link>
            <p>{{ post.attributes.desc }}</p>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import NavigationMenu from "../../components/NavigationMenu";

export default {
  components: {NavigationMenu},
  data() {
    const resolve = require.context("~/content/", true, /\.md$/);
    return {
      posts: resolve.keys().map(key => {
        const [, name] = key.match(/\/(.+)\.md$/);
        return resolve(key);
      }),
      prefix: 'posts'
    }
  },
  methods: {
    getPermalink(post) {
      return `${this.prefix}/${post.meta.resourcePath.split('\\').pop().split('/').pop().split('.')[0]}`;
    },
    urlName(resourcePath) {
      const parts = resourcePath.split('\\'),
          name = parts[parts.length - 1].split('.')[0];
      return `${this.prefix}/${name}`;
    }
  }
}
</script>

<style scoped>
tr {
  list-style-type: none;
  padding: 1em;
  margin: 1em 2em;
  border-style: ridge;
  border-radius: 0.5em;
  display: inline-block;
  width: 95%;
}
a {
  color: darkblue;
}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
</style>