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
      gsap.to("#rules", {duration: 0.5, y: "-75vh", ease: 'power1', opacity: 1});
    },

    changeMode() {
      this.$store.commit("CHANGEMODE");
    }
  },
  computed: {
    ...mapState(["extendedMode"]),
  }
};
</script>