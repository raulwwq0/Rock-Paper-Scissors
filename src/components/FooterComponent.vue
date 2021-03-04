<template>
  <footer>
    <button class="menu-btn" id="game-mode-btn">Game Mode</button>
    <button class="menu-btn" id="rules-btn" @click="open = !open">Rules</button>

    <transition name="rules">
      <div id="rules" v-if="open">
        <div id="title">
          <h2>Rules</h2>
          <div class="close-btn">
            <img src="../assets/images/icon-close.svg" alt="Close" @click="open = !open" />
          </div>
        </div>

        <img
          id="rules-img"
          src="../assets/images/image-rules.svg"
          alt="Rules"
        />
      </div>
    </transition>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style>
/* Animations styles */
.rules-enter-active,
.rules-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.rules-enter,
.rules-leave-to {
  opacity: 0;
}

.rules-enter-to,
.rules-leave {
  opacity: 1;
}
</style>