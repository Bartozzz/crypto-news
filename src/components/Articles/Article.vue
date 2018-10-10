<template>
  <b-card
    no-body
    class="article"
    bg-variant="card"
    data-aos="slide-up"
    data-aos-once="true"
  >
    <a class="card-img-container" :href="url" target="_blank" rel="noreferrer noopener">
      <b-img-lazy
        :src="img"
        :alt="title"
        class="card-img card-img-top"
        blank-color="#3a4752"
        blank-width="350"
        blank-height="350"
      />
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
};
</script>

<style lang="scss" scoped>
.article {
  display: inline-block;
}

.card {
  &-img {
    filter: grayscale(50%) saturate(80%);

    // Image container is actually a link:
    &-container {
      display: block;
    }
  }

  &-title,
  &-text {
    word-break: break-word;
  }

  &-text {
    text-align: justify;
    text-align-last: left;
    text-justify: distribute;

    hyphens: auto;
  }
}
</style>
