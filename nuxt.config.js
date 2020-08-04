import * as Mode from "frontmatter-markdown-loader/mode";

const path = require("path");
const markdownIt = require('markdown-it');
const prism = require('markdown-it-prism');
const mdMathjax = require('markdown-it-mathjax3');
const mdGithubHeadings = require('@gerhobbelt/markdown-it-github-headings');

const customMdEngine = markdownIt('default', {
  html: true,
  linkify: true,
  breaks: true,
  typographer: true
})
    .use(prism, {plugins: ['line-numbers', 'inline-color', 'show-language']})
    .use(mdMathjax)
    .use(mdGithubHeadings, {prefixHeadingIds: false})

export default {
  mode: 'spa',
  target: 'static',
  components: true,
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    'bootstrap-vue/nuxt'
  ],
  head: {
    title: 'Timothy Lin',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'},
      //{rel: "stylesheet", href: 'https://cdn.jsdelivr.net/npm/katex@0.10.0-alpha/dist/katex.min.css'}
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML',
        type: 'text/javascript'
      },
      {src: '@/assets/css/prism.js', type: 'text/javascript'}
    ]
  },
  css: [
    '@/assets/css/main.css',
    '@/assets/css/prism.css'
  ],
  build: {
    extend(config, ctx) {
      // add frontmatter-markdown-loader
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, "content"),
        loader: "frontmatter-markdown-loader",
        options: {
          mode: [Mode.VUE_COMPONENT, Mode.META],
          markdownIt: customMdEngine
        }
      });
    }
  }
}