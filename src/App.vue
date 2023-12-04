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
  mounted() {
    this.setTheme(); // Set initial theme

    // Listen for changes in the color scheme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      this.setTheme()
    });
  },
  methods: {
    setTheme() {
      const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

      // Set the data attribute on the body to switch themes
      document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');   
      document.documentElement.style.setProperty('--background-color', darkMode ? '#000' : 'white');
      document.documentElement.style.setProperty('--text-color', darkMode ? 'white' : 'black');
    },
    
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
