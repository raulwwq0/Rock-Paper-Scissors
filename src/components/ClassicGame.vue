<template>
  <div id="original-game">
    <router-link to="/round">
      <div class="btn paper-btn" @click="btnPicked('paper')">
        <img src="../assets/images/icon-paper.svg" />
      </div>

      <div class="btn rock-btn" @click="btnPicked('rock')">
        <img src="../assets/images/icon-rock.svg" />
      </div>

      <div class="btn scissors-btn" @click="btnPicked('scissors')">
        <img src="../assets/images/icon-scissors.svg" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ClassicGame",
  data(){
    return {
      pick: null,
    }    
  },
  methods: {
    btnPicked(pick) {
      this.pick = pick;
      this.$emit('pick', this.pick);
    },
  },
  updated() {
    this.btnPicked();
  },
};
</script>