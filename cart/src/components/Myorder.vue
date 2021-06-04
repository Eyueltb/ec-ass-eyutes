<template>
  <div class="myOrder" :class="{ visible: visible }">
    <h1>Din beställning</h1>

    <OrderItems
        v-show="orderItems.length > 0"
       class="MyOrderItems"
        v-for="thing in orderItems"
        :thing="thing"
        :key="thing.id"
        @increase="increase(thing)"
        @minimize="minimize(thing)"
        @delete="deleteItem(thing)"
    >
    </OrderItems>
    <div class="total">
      <h5>Total: .................{{ total }} kr</h5>
      <router-link to="/drone"
      ><a href="#" v-on:click="$emit('getData')"
          class="button"
      >Take my money!</a
      ></router-link>
    </div>
  </div>
</template>

<script>
import OrderItems from "../components/OrderItems.vue";
import { mapState,mapActions } from "vuex";
export default {
  components: {
    OrderItems,
  },
  data() {
    return {
      myData:Object
     };
  },
  props: {
    visible: Boolean,
  },
  computed: {

    getOrder(){
      console.log("hi my order"  )
      return this.$store.dispatch('getCart');
      //return this.$store.state.cart;
    },
    orderItems() {
       return this.$store.state.order.cart;
       //return this.$store.dispatch("getCart");
   },
    total(){
      return this.$store.state.order.total;
      //return this.$store.dispatch('getTotal');
    },
    quantity(){
      return this.$store.state.order.quantity;
    },
    ...mapState(['cart']),
    ...mapActions(['decreaseOrder','increaseOrder','deleteOrder']),

  },
  methods: {

    minimize(item) {
      this.$store.dispatch('decreaseOrder', item);
      //this.decreaseOrder(item);
    },
    increase(item) {
      this.$store.dispatch('increaseOrder', item);
      //this.increaseOrder(item);
    },
    deleteItem(item) {
      this.$store.dispatch('deleteOrder', item);
    },
  },
};
</script>
<style scoped>
.myOrder{
  height: 650px;
  position: absolute;
  top: 20px;
  right: 0;
  width: 500px;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 5px 5px 20px 20px rgba(27, 146, 126, 0.75);
  border-radius: 30px;
  background-color: white;
  padding: 2px;
}
h1 {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 40px;
  font-size: 2.2rem;
  font-weight: bold;
}
.visible {
  display: flex;
}
.MyOrderItems{

  margin-left: 30px;
}
.total {
  color: rgba(11, 9, 41, 0.849);
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 30%;
  margin-left: -40%;
}

.button {
  color: rgb(255, 255, 255);
  background-color: rgb(117, 16, 16);
  font-weight: bold;
  border-radius: 15px;
  padding: 10px;
  font-size: 1.2rem;
  margin-bottom: 30%;
}
a:link {
  text-decoration: none;
}

</style>