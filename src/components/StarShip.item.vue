<template>
  <li>
    <a @click="onStarShipSelected">{{ starshipDisplayName }}</a>
  </li>
</template>
<script>
import { getStarShipIdFromUrl } from '../shared/getStarShipIdFromUrl';

export default {
  props: {
    starShip: {
      type: String,
      required: true
    }
  },
  computed: {
    starshipDisplayName() {
      return `StarShip ${getStarShipIdFromUrl(this.starShip)}`;
    }
  },
  methods: {
    onStarShipSelected() {
      this.$emit('star-ship-selected', this.starShip);
    }
  }
};
</script>
