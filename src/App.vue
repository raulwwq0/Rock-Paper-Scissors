<template>
  <div id="app">
    <HeaderComponent/>
    <vue-page-transition name="zoom">
      <router-view
        @pick="pick=$event"
        :pickSelected="this.pick"
      />
    </vue-page-transition>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue';


export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data(){
    return {
      pick: null,
    }
  },
}
</script>

<style>
  @import "./assets/css/styles.css";
</style>
