<template>
  <b-card
    no-body
    class="article"
    bg-variant="card"
    border-variant="transparent"
  >
    <a class="card-img-container" :href="url" target="_blank" rel="noreferrer noopener">
      <b-img :src="img" :alt="title" class="card-img card-img-top" />
    </a>

    <b-card-body>
      <a class="text-light" :href="url" target="_blank" rel="noreferrer noopener">
        <h4 class="card-title" v-html="title" />
      </a>

      <p class="card-text" v-html="body" />

      <small class="text-muted">
        Updated {{ published }} by <a class="text-light" :href="url" target="_blank" rel="noreferrer noopener">{{ publisher }}</a>.
      </small>
    </b-card-body>
  </b-card>
</template>

<script>
import { formatDistance } from "date-fns";

export default {
  name: "Article",

  props: {
    url: String,
    img: String,
    body: String,
    title: String,
    date: Number,
    publisher: String
  },

  computed: {
    published() {
      return formatDistance(new Date(this.date * 1000), new Date());
    }
  }
}
</script>

<style scoped>
.article {
  display: inline-block;
}

.card-img-container {
  display: block;

  position: relative;
  width: 100%;
  height: 0;

  /* https://stackoverflow.com/questions/15520623/css-image-layouting-before-image-loaded */
  /* height / width * 100 */
  padding-top: 100%;

  background-color: #282b2e;
}

.card-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  filter: grayscale(50%) saturate(80%);
}

.card-title,
.card-text {
  word-break: break-word;
}

.card-text {
  text-align: justify;
  text-align-last: left;
  text-justify: distribute;

  hyphens: auto;
}
</style>
