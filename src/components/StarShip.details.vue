<template>
  <div class="app-moview-details">
    <h1>{{ starShip.name }}</h1>
    <p>model: {{ starShip.model }}</p>
    <p>passengers: {{ starShip.passengers }}</p>
  </div>
</template>

<script>
export default {
  name: "AppMovieDetails",
  props: {
    starShip: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToStarShipView(starship) {
      this.$router.push({ name: "StarShip", params: { starshipId: 2 } });
    }
  }
};
</script>
