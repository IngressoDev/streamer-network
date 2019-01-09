<template>
  <v-toolbar app dense style="z-index: 999; padding-left: 0">
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
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    items: [{ title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me 2' }],
  }),
};
</script>