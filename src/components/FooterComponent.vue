<template>
  <footer>
    <button class="menu-btn" id="game-mode-btn">Game Mode</button>
    <button class="menu-btn" id="rules-btn" @click="showRules()">Rules</button>
    <Rules id="rules" />
  </footer>
</template>

<script>
import Rules from './Rules.vue'
import gsap from 'gsap';

export default {
  name: "FooterComponent",
  components:{
    Rules,
  },
  methods: {
    showRules(){
      gsap.to("#rules", {duration: 0.5, y: "-75vh", ease: 'power1', opacity: 1});
    }
  },
};
</script>