<template>
  <div class="all">
    <header>
      <img src="@/assets/graphics/graphics-header.svg" alt="header" />
      <a @click="$router.push({ path: '/nav' })">
        <img src="@/assets/graphics/bag.svg" alt="box" />
      </a>
    </header>
    <section v-show="getOrder!=null">
      <img src="@/assets/graphics/user.svg" alt="profile" />
      <h1>Sixten Kaffelover</h1>
      <span>sixten.kaffelover@zocom.se</span>
      <h2>Orderhistorik</h2>
    </section>
    <section>
      <img src="@/assets/graphics/user.svg" alt="profile" />
      <h1>{{getUser}}</h1>
      <span id="pro">{{getUser}}</span>
      <h2>Orderhistorik</h2>
      <h3>{{getUser}}</h3> Orders the following:
      <ul v-for="item in getOrder "  :key="item.id">
        <h4>{{item.title}}</h4>
        <a>{{item.desc}}</a>
        <a>{{item.price}}</a>
      </ul>


    </section>
    <img src="@/assets/graphics/graphics-footer.svg" alt="footer" />
  </div>
</template>

<script>

import {mapGetters, mapState} from "vuex";

export default {
   methods:{

   },
   computed: {
     getUser(){return  this.$store.dispatch('getUser') },
     getOrder(){ return this.$store.state.order.order;},
     getCart(){ return this.$store.state.order.cart;},
     ...mapState(['cart','user']),
     ...mapGetters(['getUsersByID']),
  }
};
</script>

<style scoped>
.all{
  background-color: rgba(0, 0, 0, 0.788);
}
img[alt="profile"] {
  margin: 20px;
  width: 80px;
 }
img[alt="box"] {
  /*
  width: 75px;
  right: 46rem;
  bottom: 30rem;
  position: relative;
  cursor: pointer;
  */
  width: auto;
  cursor: pointer;
}
#pro {margin-right: 0%;
}
section h2{
  text-align: center;
}
</style>