<template>
  <v-card>
    <v-img :src="image" aspect-ratio="1.75"></v-img>

    <v-card-title>
      <h3 class="title mb-1">{{title}}</h3>
      <div style="color: #757575">Last update: 2 days ago</div>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat icon color="grey darken-1" :to="{name: 'overlay', params: {id: id}}">
        <v-icon>open_in_new</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn flat icon color="grey darken-1" :to="{name: 'overlay_edit', params: {id: id}}">
        <v-icon>edit</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn flat icon color="grey darken-1">
        <v-icon>delete_forever</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn flat icon color="grey darken-1">
        <v-icon>file_copy</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    id: String,
    image: String,
    title: String,
  },
};
</script>

<style scoped>
</style>
