<template>
  <v-toolbar app dense style="z-index: 999; padding-left: 0">
    <v-toolbar-side-icon @click="toggleSidebar"></v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase">
      <span>Streamer</span>
      <span class="font-weight-light">Network</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <v-btn slot="activator" dark icon>
        <v-avatar size="32">
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
      </v-btn>
      <v-list>
        <v-list-tile v-for="(item, index) in items" :key="index" @click>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions('sidebar', {
    toggleSidebar: 'toggleSidebar',
  }),
  data: () => ({
    items: [{ title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }, { title: 'Logout' }],
  }),
};
</script>