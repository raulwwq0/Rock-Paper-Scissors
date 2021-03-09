<template>
  <header id="header">
    <div class="logo">
      <img
        id="classic-logo"
        src="../assets/images/logo.svg"
        alt="Rock, Paper, Scissors"
      />
      <img
        id="extended-logo"
        src="../assets/images/logo-bonus.svg"
        alt="Rock, Paper, Scissors, Lizard, Spock"
      />
    </div>

    <div id="score-box">
      <span class="score-text">Score</span>

      <span id="score" class="classic-score">{{
        $store.state.counter
      }}</span>
      <span id="score" class="extended-score">{{
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