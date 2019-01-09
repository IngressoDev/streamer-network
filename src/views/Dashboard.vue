<template>
  <div>
    <Sidebar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
};
</script>
