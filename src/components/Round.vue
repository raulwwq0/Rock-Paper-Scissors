<template>
  <div id="round">
    <div id="your-pick">
      <h4>You picked</h4>
      <div class="your-picks">
        <div class="pre-shadow"></div>
        <div
          class="btn paper-btn your-btn-picked"
          v-if="yourSelection == 'paper'"
        >
          <img src="../assets/images/icon-paper.svg" />
        </div>

        <div
          class="btn rock-btn your-btn-picked"
          v-if="yourSelection == 'rock'"
        >
          <img src="../assets/images/icon-rock.svg" />
        </div>

        <div
          class="btn scissors-btn your-btn-picked"
          v-if="yourSelection == 'scissors'"
        >
          <img src="../assets/images/icon-scissors.svg" />
        </div>

        <div
          class="btn lizard-btn-extended your-btn-picked"
          v-if="yourSelection == 'lizard'"
        >
          <img src="../assets/images/icon-lizard.svg" />
        </div>

        <div
          class="btn spock-btn-extended your-btn-picked"
          v-if="yourSelection == 'spock'"
        >
          <img src="../assets/images/icon-spock.svg" />
        </div>

        <div class="win-shadow" v-if="youWin">
          <div class="circle-1">
            <div class="circle-2"></div>
          </div>
        </div>
      </div>
    </div>

    <div id="result">
      <span v-if="result && result != null">
        <h1>{{ result }}</h1>
        <router-link to="/classic" v-if="!this.$store.state.extendedMode">
          <button class="again-btn">Play Again</button>
        </router-link>
        <router-link to="/extended" v-if="this.$store.state.extendedMode">
          <button class="again-btn">Play Again</button>
        </router-link>
      </span>
    </div>

    <div id="house-pick">
      <h4>The house picked</h4>
      <div class="house-picks">
        <div class="pre-shadow"></div>
        <div
          class="btn paper-btn house-btn-picked"
          v-if="houseSelection == 'paper'"
        >
          <img src="../assets/images/icon-paper.svg" />
        </div>

        <div
          class="btn rock-btn house-btn-picked"
          v-if="houseSelection == 'rock'"
        >
          <img src="../assets/images/icon-rock.svg" />
        </div>

        <div
          class="btn scissors-btn house-btn-picked"
          v-if="houseSelection == 'scissors'"
        >
          <img src="../assets/images/icon-scissors.svg" />
        </div>

        <div
          class="btn lizard-btn-extended house-btn-picked"
          v-if="houseSelection == 'lizard'"
        >
          <img src="../assets/images/icon-lizard.svg" />
        </div>

        <div
          class="btn spock-btn-extended house-btn-picked"
          v-if="houseSelection == 'spock'"
        >
          <img src="../assets/images/icon-spock.svg" />
        </div>

        <div class="lose-shadow" v-if="youLose">
          <div class="circle-1">
            <div class="circle-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import gsap from "gsap";

export default {
  name: "Round",
  props: ["pickSelected"],
  data() {
    return {
      yourSelection: this.pickSelected,
      houseSelection: null,
      result: null,
      youWin: true,
      youLose: true,
    };
  },
  methods: {
    houseSelector(min, max) {
      var housePick = Math.round(Math.random() * (max - min) + min);
      if (housePick == 1) {
        housePick = "paper";
      } else if (housePick == 2) {
        housePick = "rock";
      } else if (housePick == 3) {
        housePick = "scissors";
      } else if (housePick == 4) {
        housePick = "lizard";
      } else if (housePick == 5) {
        housePick = "spock";
      }
      this.houseSelection = housePick;
    },

    whoWinClassic(you, house) {
      if (you == house) {
        this.result = "Draw";
        this.youWin = false;
        this.youLose = false;
      } else if (you == null) {
        this.result = "Error";
        this.youWin = false;
        this.youLose = false;
      } else if (
        (you == "paper" && house == "rock") ||
        (you == "rock" && house == "scissors") ||
        (you == "scissors" && house == "paper")
      ) {
        this.result = "You Win";
        this.$store.commit("INCREASE");
        this.youLose = false;
        this.youWin = true;
      } else {
        this.result = "You Lose";
        this.$store.commit("DECREASE");
        this.youWin = false;
        this.youLose = true;
      }
    },

    whoWinExtended(you, house) {
      if (you == house) {
        this.result = "Draw";
        this.youWin = false;
        this.youLose = false;
      } else if (you == null) {
        this.result = "Error";
        this.youWin = false;
        this.youLose = false;
      } else if (
        (you == "scissors" && house == "paper") ||
        (you == "scissors" && house == "lizard") ||
        (you == "paper" && house == "rock") ||
        (you == "paper" && house == "spock") ||
        (you == "rock" && house == "lizard") ||
        (you == "rock" && house == "scissors") ||
        (you == "lizard" && house == "spock") ||
        (you == "lizard" && house == "paper") ||
        (you == "spock" && house == "scissors") ||
        (you == "spock" && house == "rock")
      ) {
        this.result = "You Win";
        this.$store.commit("INCREASE");
        this.youLose = false;
        this.youWin = true;
      } else {
        this.result = "You Lose";
        this.$store.commit("DECREASE");
        this.youWin = false;
        this.youLose = true;
      }
    },

    roundAnimations() {
      const roundTimeline = gsap.timeline({ defaults: { duration: 1 } });

      if(screen.width > 670){
      roundTimeline
        .to("#your-pick", { x: "-10vw", delay: 1.5, ease: "elastic" })
        .to("#house-pick", { x: "10vw", delay: 1.5, ease: "elastic" }, 0)
        .to(".win-shadow", { opacity: 1, scale: 3, ease: "back" }, "<0")
        .to(".lose-shadow", { opacity: 1, scale: 3, ease: "back" }, "<0")
        .from("#result", { opacity: 0, ease: "circ" }, "<.3");
      } else {
      roundTimeline
        .to("#your-pick", { scale:1.1, delay: 1.5, ease: "elastic" })
        .to("#house-pick", { scale:1.1, delay: 1.5, ease: "elastic" }, 0)
        .to(".win-shadow", { opacity: 1, scale: 3, ease: "back" }, "<0")
        .to(".lose-shadow", { opacity: 1, scale: 3, ease: "back" }, "<0")
        .from("#result", { opacity: 0, ease: "circ" }, "<.3");
      }

      
    },
  },
  computed: {
    ...mapState(["counter"]),
  },
  mounted() {
    if (!this.$store.state.extendedMode) {
      setTimeout(() => {
        this.houseSelector(1, 3);
      }, 1400);
      setTimeout(() => {
        this.whoWinClassic(this.yourSelection, this.houseSelection);
      }, 1600);
    } else {
      setTimeout(() => {
        this.houseSelector(1, 5);
      }, 1400);
      setTimeout(() => {
        this.whoWinExtended(this.yourSelection, this.houseSelection);
      }, 1600);
    }
    this.roundAnimations();
  },
};
</script>