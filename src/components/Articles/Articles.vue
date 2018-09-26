<template>
  <b-row>
    <b-col lg="4" sm="6" xs="12" class="mb-4"><Article /></b-col>
    <b-col lg="4" sm="6" xs="12" class="mb-4"><Article /></b-col>
    <b-col lg="4" sm="6" xs="12" class="mb-4"><Article /></b-col>
    <b-col lg="4" sm="6" xs="12" class="mb-4"><Article /></b-col>
    <b-col lg="4" sm="6" xs="12" class="mb-4"><Article /></b-col>
  </b-row>
</template>

<script>
import Article from "./Article";

export default {
  name: "Articles",
  components: {
    Article
  }
}
</script>

<style scoped>
</style>
