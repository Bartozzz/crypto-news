<template>
  <b-card
    class="article"
    bg-variant="card"
    border-variant="transparent"
    :title="title"
    :img-src="img"
    img-fluid
    img-alt="image"
    img-top
  >
    <p class="card-text">
      {{ body }}
    </p>

    <small class="text-muted">Updated {{ published }} by {{ publisher }}</small>
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

.card-text {
  word-break: break-all;
}
</style>
