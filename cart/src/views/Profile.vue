<template>
  <div class="all">
    <header>
      <img src="@/assets/graphics/graphics-header.svg" alt="header" />
      <a @click="$router.push({ path: '/nav' })">
        <img src="@/assets/graphics/bag.svg" alt="box" />
      </a>
    </header>
    <section v-show="this.$store.state.order.order==null">
      <img src="@/assets/graphics/user.svg" alt="profile" />
      <h1>Sixten Kaffelover</h1>
      <span>sixten.kaffelover@zocom.se</span>
      <h2>Orderhistorik</h2>
    </section>
    <section>
      <img src="@/assets/graphics/user.svg" alt="profile" />
      <ul v-show="getOrder!=null" v-for="order in getOrder"  :key="order.id">
        <h2> customer order the product: </h2>
      <span> name: {{order.user.name}}</span>
      <span id="pro"> email: {{order.user.email}}</span>
      <h2>Orderhistorik</h2>
      <h3>user: {{order.user.name}}</h3> Orders the following:
        <ul v-for="item1 in order.item"  :key="item1.id">
        <h4>{{item1.title}}</h4>
        <h5>{{item1.price}}</h5>
          <h4>{{item1.quantity}}</h4>
          <h5>{{item1.desc}}</h5>
      </ul>
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
     getUser(){return  this.$store.dispatch('getOrderUser') },
     getOrder(){ return this.$store.state.order.order},
     getOrderItems(){ return this.$store.dispatch('getOrderItems');},
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