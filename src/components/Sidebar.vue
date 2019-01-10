<template>
  <v-navigation-drawer v-model="visible" class="mt-5" style="width: 300px" app clipped>
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
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    visible: {
      get() {
        return this.$store.state.sidebar.visible;
      },
      set(visible) {
        if (visible !== this.$store.state.sidebar.visible) {
          this.$store.dispatch('sidebar/toggleSidebar');
        }
      },
    },
  },
  data() {
    return {
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
        {
          title: 'Overlays',
          icon: 'widgets',
          href: 'overlays',
        },
      ],
    };
  },
  methods: {
    ...mapActions('sidebar', ['toggleSidebar']),
  },
};
</script>

<style scoped>
</style>
