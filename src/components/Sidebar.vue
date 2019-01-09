<template>
  <v-navigation-drawer class="mt-5" style="width: 300px" app clipped disable-route-watcher>
    <v-list>
      <v-list-tile
        v-for="section in sections"
        :key="section.title"
        :to="{name: section.href}"
        exact
      >
        <v-list-tile-action>
          <v-icon>{{ section.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ section.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      sections: [
        {
          title: 'Dashboard',
          icon: 'dashboard',
          href: 'dashboard',
        },
        {
          title: 'Profil',
          icon: 'person',
          href: 'profile',
        },
        {
          title: 'Kanal',
          icon: 'view_stream',
          href: 'channel',
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
