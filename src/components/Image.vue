<template>
  <div class="image">
    <VueDraggableResizable>
      <v-img :src="img" width="100%" height="100%" :style="`z-index: ${zIndex}; opacity: ${opacity / 100}`"></v-img>
    </VueDraggableResizable>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable';

export default {
  components: {
    VueDraggableResizable,
  },
  props: {
    img: String,
    width: Number,
    height: Number,
    top: Number,
    left: Number,
    opacity: Number,
    zIndex: Number,
  },
};
</script>

<style scoped>
</style>
