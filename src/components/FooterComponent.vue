<template>
  <footer>
    <router-link to="/extended" v-if="$store.state.extendedMode">
      <button class="menu-btn" id="game-mode-btn" @click="changeMode()">Change Mode</button>
    </router-link>

        <router-link to="/classic"  v-if="!$store.state.extendedMode">
      <button class="menu-btn" id="game-mode-btn" @click="changeMode()">Change Mode</button>
    </router-link>

    <button class="menu-btn" id="rules-btn" @click="showRules()">Rules</button>
    <Rules id="rules" />
  </footer>
</template>

<script>
import Rules from './Rules.vue';
import { mapState } from "vuex";
import gsap from 'gsap';

export default {
  name: "FooterComponent",
  components:{
    Rules,
  },
  methods: {
    showRules(){
      if(screen.width > 670) {
        gsap.to("#rules", {duration: 0.5, y: "-75vh", ease: 'power1', opacity: 1});
      } else {
        gsap.to("#rules", {duration: 0.5, y: "-100vh", ease: 'power1', opacity: 1});
      }
    },

    changeMode() {
      this.$store.commit("CHANGEMODE");
      const headerTimeline = gsap.timeline();

      if(this.$store.state.extendedMode){
        headerTimeline.to("#header", {duration: 0.3, y: "-40vh"})
              .to("#classic-logo", {duration: 0, opacity: 0})
              .to("#extended-logo", {duration: 0, opacity: 1}, '<0')
              .to(".classic-score", {duration: 0, opacity: 0}, '<0')
              .to(".extended-score", {duration: 0, opacity: 1}, '<0')
              .to("#header", {duration: 0.3, y: "0vh"});
      } else {
        headerTimeline.to("#header", {duration: 0.3, y: "-40vh"})
              .to("#extended-logo", {duration: 0, opacity: 0})
              .to("#classic-logo", {duration: 0, opacity: 1}, '<0')
              .to(".extended-score", {duration: 0, opacity: 0}, '<0')
              .to(".classic-score", {duration: 0, opacity: 1}, '<0')
              .to("#header", {duration: 0.3, y: "0vh"});
      }
    },

    modeCheck(){
      const headerTimeline = gsap.timeline();
      if(document.getElementById("extended-game")){
        headerTimeline
              .to("#classic-logo", {duration: 0, opacity: 0})
              .to("#extended-logo", {duration: 0, opacity: 1}, '<0')
              .to(".classic-score", {duration: 0, opacity: 0}, '<0')
              .to(".extended-score", {duration: 0, opacity: 1}, '<0')
              .to("#header", {duration: 0.3, y: "0vh"});

        this.$store.state.extendedMode = true;
        console.log(this.$store.state.extendedMode)
      }
    }
  },
  computed: {
    ...mapState(["extendedMode"]),
  },

  mounted(){
    this.modeCheck();
  }
};
</script>