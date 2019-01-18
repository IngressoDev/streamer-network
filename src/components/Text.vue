<template>
  <div class="text">
    <VueDraggableResizable>
      <div :style="`z-index: ${zIndex}; opacity: ${opacity / 100}`">{{message}} Bla</div>
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
    message: String,
    width: Number,
    height: Number,
    top: Number,
    left: Number,
    opacity: Number,
    zIndex: Number,
    fontName: String,
    fontColor: String,
    fontSize: Number,
    lineHeight: Number,
    bold: Boolean,
    italic: Boolean,
    underlined: Boolean,
    uppercase: Boolean,
    shadow: Boolean,
    scrolling: Boolean,
    scrollDirection: String,
    scrollSpeed: Number
  },
};
</script>

<style scoped>
</style>
