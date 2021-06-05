<template>
  <div class="waiting">
    <div class="top">
      <p class="order-number">Order number {{orderNumber}}</p>
   </div>
    <div class="order">
      <h1>Din beställning</h1>
      <h1>är på väg!</h1>
      <p class="minutes">{{e}} minuter</p>
    </div>
   <div>

       <button>
    <a  class="cool-btn"
        v-on:click="$router.push({ path: '/register' })">
      OK, cool! </a></button>

   </div>
  </div>
</template>

<script>
import { generateOrderNr, generateETA } from "../backend/utils/utils.js";
export default {
  data() {
    return {
      e: 0,
      orderNumber:""
    };
  },
  methods: {
    getData() {
      this.orderNumber = generateOrderNr();
      this.e = generateETA();
      localStorage.setItem("orderNumber",this.orderNumber);
    },
  },
  async mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.top{
  margin-top: 0px;
}
.waiting{
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  height: 100vh;
  max-width: 24rem;
  background-image: url("../assets/graphics/drone.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% 20%;
  background-color: #e5674e;
  display: flex;
  flex-direction: column;
  padding-left: 8%;
  padding-right: 8%;
  align-content: center;
  text-align: center;
  color: rgba(253, 253, 253, 0.62);

 }
.order-number {
  margin-top: 10%;
  color: rgba(253, 253, 253, 0.62);
  font-size: 20px;
  margin-bottom: 90%;
}
.order-status h1 {
  font-size: 65px;
  font-weight: bold;
}
.minutes {
  color: #fafafafb;
  font-size: 25px;
}
.cool-btn {
  background-color:#fafafafb;
  border: none;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  border-radius: 12px;
  width: 80px;
  height: 15px;
  color: #2c2c24;
}

img[alt="drone"] {
  margin: 2rem;
}

</style>