<template>
  <header id="header">
    <div class="logo">
      <img
        id="classic-logo"
        src="../assets/images/logo.svg"
        alt="Rock, Paper, Scissors"
        v-if="!$store.state.extendedMode"
      />
      <img
        id="extended-logo"
        src="../assets/images/logo-bonus.svg"
        alt="Rock, Paper, Scissors, Lizard, Spock"
        v-if="$store.state.extendedMode"
      />
    </div>

    <div id="score-box">
      Score

      <span id="score" v-if="!$store.state.extendedMode">{{
        $store.state.counter
      }}</span>
      <span id="score" v-if="$store.state.extendedMode">{{
        $store.state.extendedCounter
      }}</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>