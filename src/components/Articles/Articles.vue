<template>
  <div class="columns">
    <Article
      v-for="post in news"
      v-bind:key="post.id"
      v-bind:url="post.url"
      v-bind:img="post.imageurl"
      v-bind:body="post.body"
      v-bind:title="post.title"
      v-bind:date="post.publishedOn"
      v-bind:publisher="post.sourceInfo.name"
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

  created() {
    this.$store.dispatch("news/getLatestNews");
  }
};
</script>

<style lang="scss" scoped>
.columns {
  column-count: 3;
  column-fill: balance;
  column-gap: 1em;

  @media screen and (max-width: 830px) {
    column-count: 2;
  }

  @media screen and (max-width: 570px) {
    column-count: 1;
  }
}
</style>
