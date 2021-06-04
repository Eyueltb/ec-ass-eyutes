<template>
  <div class="shoppingCart">
    <a
        @click="$emit('showAllOrder')"
    >
      <img  src="@/assets/graphics/clock-padlock.svg"  alt="bags" />
      <div class="number">

      </div>
    </a>
  </div>
</template>

<script>
export default {
  computed: {

  },
};
</script>

<style scoped>
.shoppingCart {
  width: 50px;
  height: 50px;
  position: relative;
  bottom: 27rem;
  left: 85%;

}
img[alt="bags"] {
  position: relative;
  width: 90px;
}

.number {
  position: relative;
  color: white;
  border-radius: 50%;
  background-color: rgb(199, 35, 35);
  padding: 10px 15px;
  left: 3rem;
  bottom :6rem;
}

</style>