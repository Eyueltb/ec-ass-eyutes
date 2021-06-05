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

        <h2> Order History : </h2>
        <table>
          <tr>
            <th>OrderNumber</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>{{order.orderNumber}}</td>
            <td>{{order.date}}</td>
          </tr>
        </table>
         <h3> customer: </h3>
        <table>
           <tr>
            <th>Name</th>
            <th>email</th>
           </tr>
          <tr>
            <td>{{order.user.name}}</td>
            <td>{{order.user.email}}</td>
          </tr>
        </table>
      <h2>Ordered Items </h2>
      <table>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Qunatity</th>
            <th>Total</th>
          </tr>
          <tr v-for="item1 in order.item"  :key="item1.id">
            <td>{{item1.title}}</td>
            <td>{{item1.price}} kr</td>
            <td>{{item1.quantity}}</td>
         <td>{{item1.price * item1.quantity}} kr</td>
          </tr>
         </table>
         <table>
         <tr>
           <th>Sum</th>
           <td>{{order.total}} kr</td>

         </tr>
         </table>
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 95%;
  margin-left: -2%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
#pro {margin-right: 0%;
}
section h2{
  text-align: center;
}
</style>