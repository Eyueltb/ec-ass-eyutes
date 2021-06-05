<template>
  <div class="all">
    <header>
      <img src="@/assets/graphics/graphics-header.svg" alt="header" />
    </header>
      <div class="main">
        <a
            href="#"
            class="a-tag d-flex flex-column text-decoration-none align-items-left"
            @click="$router.push({ path: '/nav' })"
        >
          <img src="@/assets/graphics/bag.svg" alt="burger" />
        </a>
    <div>
     <h1>   Välkommen till AirBean-familjen!</h1>
     <p>
        Genom att skapa ett konto nedan kan
        du spara och se din orderhistorik
      </p>
    </div>
    <div>
        <div class="name">
            <label >Name:</label>
            <input class="input-name" v-model="name" placeholder="Eyuel Belay">
        </div>
        <div class="e-post">
            <label>Epost:</label> <input class="input-e-post" v-model="email" placeholder="eyuelb@kth.se">
        </div>
        <div>
            <input
                v-model="gdpr"
                class="gdpr"
                type="radio"
                id="gdpr"
                value="gdpr" /> GDPR Ok!
            <a v-on:click="$router.push({ path: '/profile' })">
              <button  @click="onSubmit"  class="btn-brew" type="submit" >Brew me a cup!</button>
          </a>
        </div>
    <img src="@/assets/graphics/graphics-footer.svg" alt="footer" />
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Register.vue",
  data(){
    return {
      name:'',
      email:'',
      gdpr:''
    }
  },
  methods:{
    onSubmit(){
      if (this.name.length > 0 && this.email.includes("@")){
        let user={
          name:this.name,
          email:this.email,
          gdpr:(!this.gdpr.checked) ? true : false,
        }
        //if user is new add to the user
        if(!this.$store.dispatch("checkUser", user)){
           this.$store.dispatch('addUser', user)
        }
        //get Item store in the cart
        //let cart=this.$store.dispatch('getCart');
        let cart=this.$store.state.order.cart;
        let today = new Date();
        let date = today.getFullYear()+'/'+String(today.getMonth() + 1).padStart(2, '0')+'/'+String(today.getDate()).padStart(2, '0');//January is 0
        console.log(this.$store.state.order.cart)
        let order={
          orderNumber:localStorage.getItem("orderNumber"),
          date:date,
          user:user,
          item:cart,
        }
        // then add to order

        this.$store.dispatch('addOrder', order)
        this.name=''
        this.email='',
        this.gdpr=false
        //show order history
        //let orderHistory=this.$store.dispatch("getOrderHistory");
        let orderHistory=this.$store.state.order.order;
        console.log(orderHistory)
      }

    }
  }
}
</script>

<style scoped>
.all{
  background-color: bisque;
}
.reg-form{
  margin: 5%;
  border:black ;
}

.main{

  width: auto;
  height: auto;
}
.name,.e-post{
  margin: auto;
  padding: 7px;
}
.input-name,.input-e-post{
  margin-left: 15px ;
}
.input-e-post,.gdpr, .btn-brew{
  margin-top: 15px ;
 }

.btn-brew{
  background-color:#2c2c24;
  border: none;
  color: white;
  padding: 30px;
  text-align: center;

  font-size: 20px;
  margin: 30px 50px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  border-radius: 15px;
  width: 250px;
  align-content: center;
}

</style>