<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

  

<template>
  <div class="container-fluid">
    <div class="row">
      <Header />
    </div>
    <hr />
    <RouterView />
  </div>

</template> 

<style scoped>

</style>
