<script setup>
import HomePageContent from '../components/HomePageContent.vue'
</script>

<script>
import halfCircleLeft from '../assets/Ellipse 9kun-x_circle.svg'
import halfCircleRight from '../assets/Ellipse 8kun-x_circle.svg'
import aircraft from '../assets/nick-morales-BwYcH78rcpI-unsplash 1aircraft.png'
export default {
    data() {
        return {
          halfCircleLeft,
          halfCircleRight,
          aircraft,
          headerStyles: {
        color: '',
      },
        }
    },
    mounted() {
      this.applyTheme();
      const mql =window.matchMedia('(prefers-color-scheme: dark)');
      mql.addEventListener(this.applyTheme);
    },
    methods: {
      applyTheme() {
        const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.headerStyles.color = darkMode? 'white' : 'black';
      }
    }
}
</script>

<template>
  <main>
    <!-- the first section of the home page that contains
    which is seperated by half circles  -->
    <section class="bg-tranparent" style="position: relative;">
      <div class="row">
        <div class="col-6">
          <div class="row">
            <!-- this row contains all the left half circle -->
            <div class="col-12 d-none d-lg-block" style="margin-top: 170px;">
              <img :src="halfCircleLeft" alt="" srcset="">
            </div>
            <div class="" style="height: 993px;"></div>
            <div class="col-12 d-none d-lg-block">
              <img :src="halfCircleLeft" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <!-- this row contains all the right half circle -->
            <div style="height: 864px;"></div>
            <div class="col-12 d-lg-flex d-none justify-content-end">
              <img :src="halfCircleRight" alt="" srcset="">
            </div>
            <div class="" style="height: 1553px;"></div>
            <div class="col-12 d-lg-flex d-none justify-content-end">
              <img :src="halfCircleRight" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
      <div style="position: absolute; top: 0%;" class="col-12">
        <HomePageContent />
      </div>
    </section>

  </main>
</template>

<style>
#main-box {
  position: relative;
}
#first-cicle {
  position: relative;
  top: 20%;
}
#right_c {
position: absolute;
top: 100%;
}
#sub-box {
  position: absolute;
  top: 0;
  margin-left: 10%;
  margin-right: 10%;
  background-color: transparent;
}
</style>