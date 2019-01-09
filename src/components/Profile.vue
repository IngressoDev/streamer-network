<template>
  <div id="profile">
    <v-container fluid>
      <v-layout>
        <v-flex xs12 md6>
          <v-card>
            <v-toolbar light card dense>
              <v-toolbar-title>Social Media</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="language" name="website" label="Website" type="text"></v-text-field>
                <v-text-field prepend-icon="discord" name="discord" label="Discord" type="text"></v-text-field>
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
export default {};
</script>

<style scoped>
</style>
