<template>
  <div class="app-moview-details">
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.opening_crawl }}</p>
    <ul>
      <AppStarShipItem
        :key="starship"
        v-for="starship in movie.starships"
        :star-ship="starship"
        @star-ship-selected="onStarShipSelected"
      />
    </ul>
  </div>
</template>

<script>
import AppStarShipItem from "./StarShip.item.vue";

export default {
  name: "AppMovieDetails",
  components: {
    AppStarShipItem
  },
  props: {
    movie: {
      type: Object,
      required: true
    }
  },

  methods: {
    onStarShipSelected(starship) {
      this.$emit("star-ship-selected", starship);
    }
  }
};
</script>
