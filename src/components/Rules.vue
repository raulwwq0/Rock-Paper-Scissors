<template>
    <div id="rules">
      <div id="title">
        <h2>Rules</h2>
        <div class="close-btn">
          <img src="../assets/images/icon-close.svg" alt="Close" @click="hideRules()"/>
        </div>
      </div>

      <img
        id="rules-img"
        src="../assets/images/image-rules.svg"
        alt="Rules"
        v-if="!$store.state.extendedMode"
      />

      <img
        id="rules-img"
        src="../assets/images/image-rules-bonus.svg"
        alt="Rules"
        v-if="$store.state.extendedMode"
      />
    </div>
</template>

<script>
import gsap from 'gsap';

export default {
    name: 'Rules',
    methods: {
        hideRules(){
            gsap.to("#rules", {duration: 1, y: "0px", ease: 'power1', opacity: 0});
        }
    }
}
</script>