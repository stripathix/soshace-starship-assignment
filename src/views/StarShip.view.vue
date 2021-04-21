<template>
  <div class="app-starship-view">
    <AppStarShipDetails v-if="starShip" :starShip="starShip" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import AppStarShipDetails from "../components/StarShip.details.vue";

export default {
  name: "AppStarShip",
  components: {
    AppStarShipDetails
  },
  data() {
    return {
      starShip: null
    };
  },
  methods: {
    async getStarShipData() {
      const { starshipId } = this.$route.params;
      const res = await fetch(`https://swapi.dev/api/starships/${starshipId}/`);
      return res.json();
    }
  },
  mounted() {
    this.getStarShipData().then(data => {
      this.starShip = data;
    });
  }
};
</script>
