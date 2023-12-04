<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'

</script>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  
};
</script>
  

<template>
  <div class="container-fluid" id="app" :class="{ 'dark': isDarkMode }" >
    <div class="row">
      <Header />
    </div>
    <hr />
    <RouterView/>
  </div>

</template> 


<style lang="scss">
@import "@/styles/_base.scss";
@import "@/styles/_variables.scss";
</style>


<!-- <style scoped lang="scss">
// Add common styles



</style> -->
