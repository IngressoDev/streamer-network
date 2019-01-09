<template>
  <div id="channel">
    <v-container fluid>
      <v-layout>
        <v-flex xs12 md6>
          <v-card>
            <v-toolbar light card dense>
              <v-toolbar-title>Genre</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-select :items="categories" attach chips label="Kategorien" multiple></v-select>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn>Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ['Fortnite', 'Rocket League', 'Just Chatting' ],
    };
  },
};
</script>

<style scoped>
</style>
