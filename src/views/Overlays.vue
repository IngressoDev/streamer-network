<template>
  <v-container fluid>
    <v-layout>
      <v-flex class="pa-1" v-for="overlay in overlays" :key="overlay.id" xs12 md3>
        <Overlay :id="overlay.id" :title="overlay.title" :image="overlay.image"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Overlay from '../components/Overlay.vue';

export default {
  data() {
    return {
      overlays: [
        { id: 'abc123', title: 'Overlay 1', image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg' },
        { id: 'def456', title: 'Overlay 2', image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg' },
      ],
    };
  },
  components: {
    Overlay,
  },
};
</script>
