<template>
  <div class="app-movie-view-container">
    <app-movie-details
      v-if="movie"
      :movie="movie"
      @star-ship-selected="onStarShipSelected"
    /> 
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { getStarShipIdFromUrl } from '../shared/getStarShipIdFromUrl';
import AppMovieDetails from "../components/Movie.details.vue";

export default {
  name: "AppMovieView",
  components: {
    AppMovieDetails
  },
  data() {
    return {
      movie: null
    };
  },
  methods: {
    onStarShipSelected(starShip) {
      const starShipId = getStarShipIdFromUrl(starShip);
      this.$router.push({
        name: "StarShip",
        params: { starshipId: starShipId }
      });
    },
    async getMovieData() {
      const { movieId } = this.$route.params;
      const res = await fetch(`https://swapi.dev/api/films/${movieId}/`);
      return res.json();
    }
  },
  mounted() {
    this.getMovieData().then(data => {
      this.movie = data;
    });
  }
};
</script>
