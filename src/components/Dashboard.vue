<template>
  <div style="position: relative;">
    <vue-draggable-resizable :draggable="true" :resizable="true">test</vue-draggable-resizable>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable';

export default {
  components: {
    VueDraggableResizable,
  },
};
</script>

<style scoped>
</style>
