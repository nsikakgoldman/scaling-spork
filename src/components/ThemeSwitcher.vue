<!-- src/components/ThemeSwitcher.vue -->
<template>
    <div></div>
  </template>
  
  <script>
  export default {
    mounted() {
    // Detect user's preferred color scheme
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Change theme based on user's preferred color scheme
    this.$emit('theme-changed', prefersDarkMode ? 'dark' : 'light');

    // Listen for changes in the user's color scheme preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener((e) => {
      this.$emit('theme-changed', e.matches ? 'dark' : 'light');
    });
  },
  methods: {
    updateDarkMode(event) {
      this.isDarkMode = event.matches;
    },
  },
  };
  </script>
  
  <style scoped lang="scss">
  // Add any specific styling for the ThemeSwitcher component
  </style>
  