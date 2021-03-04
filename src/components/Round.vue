<template>
  <div id="round">
    <div id="your-pick">
      <h4>You picked</h4>
      <div class="picks">

        <div class="btn paper-btn your-btn-picked" v-if="yourSelection == 'paper'">
          <img src="../assets/images/icon-paper.svg" />
        </div>
        
        <div class="btn rock-btn your-btn-picked" v-if="yourSelection == 'rock'">
          <img src="../assets/images/icon-rock.svg" />
        </div>

        <div class="btn scissors-btn your-btn-picked" v-if="yourSelection == 'scissors'">
          <img src="../assets/images/icon-scissors.svg" />
        </div>

      </div>
    </div>

    <div id="result" v-if="result && result != null">
      <span>
        <h1>{{result}}</h1>
        <router-link to="/classic">
          <button class="again-btn" >Play Again</button>
        </router-link>
      </span>
    </div>    

    <div id="house-pick">
      <h4>The house picked</h4>
      <div class="picks">

        <div class="btn paper-btn house-btn-picked" v-if="houseSelection == 'paper'">
          <img src="../assets/images/icon-paper.svg" />
        </div>
        
        <div class="btn rock-btn house-btn-picked" v-if="houseSelection == 'rock'">
          <img src="../assets/images/icon-rock.svg" />
        </div>

        <div class="btn scissors-btn house-btn-picked" v-if="houseSelection == 'scissors'">
          <img src="../assets/images/icon-scissors.svg" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "Round",
  props: ["pickSelected"],
  data() {
    return {
      yourSelection: this.pickSelected,
      houseSelection: null,
      result: null,
    };
  },
  methods: {
    houseSelector(min, max) {
      var housePick = Math.round(Math.random() * (max - min) + min);
      if(housePick == 1){
        housePick = 'paper'
      }else if(housePick == 2){
        housePick = 'rock'
      }else if(housePick == 3){
        housePick = 'scissors'
      }
      this.houseSelection = housePick;
    },

    whoWin(you, house){

      if(you == house){
        this.result = 'Draw';
      }else if((you == 'paper' && house =='rock') || (you == 'rock' && house =='scissors') || (you == 'scissors' && house =='paper')){
        this.result = 'You Win';
        this.$store.commit("INCREASE");
      }else{
        this.result = 'You Lose'; 
        this.$store.commit("DECREASE");
      }
    }
  },
  computed: {
    ...mapState(['counter'])
  },
  mounted() {
    setTimeout(() => {
      this.houseSelector(1, 3);
      this.whoWin(this.yourSelection, this.houseSelection);
    }, 500);
       
  },
};
</script>