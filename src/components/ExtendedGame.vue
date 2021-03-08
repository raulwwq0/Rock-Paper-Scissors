<template>
  <div id="extended-game">
    <router-link to="/round">
      <div class="btn paper-btn-extended" @click="btnPicked('paper')">
        <img src="../assets/images/icon-paper.svg" />
      </div>

      <div class="btn rock-btn-extended" @click="btnPicked('rock')">
        <img src="../assets/images/icon-rock.svg" />
      </div>

      <div class="btn scissors-btn-extended" @click="btnPicked('scissors')">
        <img src="../assets/images/icon-scissors.svg" />
      </div>

      <div class="btn lizard-btn-extended" @click="btnPicked('lizard')">
        <img src="../assets/images/icon-lizard.svg" />
      </div>

      <div class="btn spock-btn-extended" @click="btnPicked('spock')">
        <img src="../assets/images/icon-spock.svg" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ExtendedGame",
  data() {
    return {
      pick: null,
    };
  },
  methods: {
    btnPicked(pick) {
      this.pick = pick;
      this.$emit("pick", this.pick);
    },
  },
  updated() {
    this.btnPicked();
  },
};
</script>