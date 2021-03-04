<template>
  <div id="app">
    <HeaderComponent/>
    <router-view 
      @pick="pick=$event"
      :pickSelected="this.pick"
    />
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
