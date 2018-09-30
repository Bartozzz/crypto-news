<template>
  <div class="columns">
    <Article
      v-for="post in news"
      v-bind:key="post.id"
      v-bind:url="post.url"
      v-bind:img="post.imageurl"
      v-bind:body="post.body"
      v-bind:title="post.title"
      v-bind:date="post.published_on"
      v-bind:publisher="post.source_info.name"
      class="mb-3"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Article from "./Article";

export default {
  name: "Articles",

  components: {
    Article
  },

  computed: mapState({
    news: state => state.news.news,
    error: state => state.news.error
  }),

  created () {
    this.$store.dispatch("news/getLatestNews");
  }
}
</script>

<style scoped>
.columns {
  column-count: 3;
  column-fill: balance;
  column-gap: 1em;
}
</style>
